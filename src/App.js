import './App.css';
import Admin from './components/Home/Admin';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Home/> */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='./' element={<Home />} />
          <Route exact path='/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
