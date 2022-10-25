import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Nav from './components/Nav';
import Inventory from './routes/Inventory';
import Login from './routes/Login';
import Home from './routes/Home';
import About from './routes/About';


const App = ()=>{
    return (   
       <>
        <Nav/>    
          
 <Routes>
    <Route path ="/" element={<Home/>}  />
    <Route path ="/About" element={<About/>}  />
    <Route path ="/inventory" element={<Inventory/>}  />
    <Route path ="/login" element={<Login/>}  />
 </Routes>
 </>
    
    )
}

export default App;