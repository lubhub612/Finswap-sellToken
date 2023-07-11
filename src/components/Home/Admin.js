import React, { useState } from 'react';
import MLM from '../contract/MLM';
import { ToastContainer, toast } from 'react-toastify';
export default function Admin() {
  const [address, setAddress] = useState('');
  const [loader, setLoader] = useState(false);
  const handleSubmit = async () => {
    try {
      setLoader(true)
      let _allAdd = address.split(',');
      console.log('🚀 ~ handleSubmit ~ _allAdd', _allAdd);
      let _add = await MLM.ownerRegister(_allAdd);
      let _wait = await _add.wait();
      if (_wait) {
        toast.success('Transaction successful!');
        setLoader(false)

      }
    } catch (error) {
      console.log('🚀 ~ handleSubmit ~ error', error);
      toast.error('Something went wrong!');
      setLoader(false)

    }
  };

  return (
    <>
      <ToastContainer />
      <div className='container py-4'>
        <div className='row d-flex justify-content-center'>
          <div className='col-6'>
            <h4 className='text-dark'>Enter Addresses</h4>
            <div class='form-group'>
              <textarea
                class='form-control'
                id='exampleFormControlTextarea3'
                rows='5'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>
            <div className='row d-flex justify-content-center'>
              <div className='col d-flex justify-content-center'>
                {loader ? (
                  <div class='spinner-border text-success' role='status'>
                    <span class='visually-hidden'>Loading...</span>
                  </div>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className='btn btn-primary my-2'
                  >
                    submit
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
