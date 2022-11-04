import React from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';

import Inventory from './routes/Inventory';
import Login from './routes/Login';
import Home from './routes/Home';
import About from './routes/About';
import User from './tables/User';
import app from './componentCSS/app.css'
import Order from './tables/Order';
import Supplier from './tables/Supplier';
const App = ()=>{
    return (   
       <>
 <Nav/> 
 <Routes>
    <Route path ="/" element={<Home/>}  />
    <Route path ="/About" element={<About/>}  />
    <Route path ="/inventory" element={<Inventory/>}  />
    <Route path ="/login" element={<Login/>}  />
    <Route path ="/orders" element={<Order/>}  />
    <Route path ="/users" element={<User/>}  />
    <Route path ="/suppliers" element={<Supplier/>}  />



 </Routes>
 </>
    
    )
}

export default App;