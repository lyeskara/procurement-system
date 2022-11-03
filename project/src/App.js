import React from 'react';
import {add_to_asset_bucket, list_buckets} from './test_image_population/image_populator'
import {fetch_single_entry, fetch_whole_table} from './test_image_population/table_populator'

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


import app from './componentCSS/app.css'
const App = ()=>{
    console.log("supabase testing start");
    fetch_single_entry();
    fetch_whole_table();
    list_buckets();
    add_to_asset_bucket();
    console.log("supabase testing ends");

    return (   
       <>
 <Nav/>  
 <Routes>
    <Route path ="/" element={<Home/>}  />
    <Route path ="/About" element={<About/>}  />
    <Route path ="/inventory" element={<Inventory/>}  />
    <Route path ="/login" element={<Login/>}  />
 </Routes>
 <Footer/>
 </>
    
    )
}



export default App;

