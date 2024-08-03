import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './componenets/Header/Header.js';
import Aboutus from './componenets/pages/Aboutus.js';
import ContactUs from './componenets/pages/Contactus.js';
import Dashboard from './componenets/pages/Dashboard.js';
import Features from './componenets/pages/Features.js';
import Home from './componenets/pages/Home.js';
import Login from './componenets/pages/Login.js';
import Mainpage from './componenets/pages/Mainpage.js';
import Signup from './componenets/pages/Signup.js';
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
      
      <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>
        <Route path="/Mainpage" element={<Mainpage/>}/>
      </Routes>
    </div>
  )
}


export default App;
