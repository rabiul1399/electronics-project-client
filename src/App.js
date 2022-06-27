import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Forms/Login';
import Register from './Pages/Forms/Register';
import Home from './Pages/Home/Home';
import Footer from './Pages/Sheard/Footer';
import Navbar from './Pages/Sheard/Navbar';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    
    </div>
  );
}

export default App;
