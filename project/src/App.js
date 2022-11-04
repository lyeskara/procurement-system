// async call reference: https://stackoverflow.com/questions/49982058/how-to-call-an-async-function
import React from 'react';
import {
    generate_entries_of_item_table_from_images, generate_entries_of_supplier_table,
} from './test_image_population/image_populator'

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
import Db_pop from './routes/populate_db';


import app from './componentCSS/app.css'

let GENERATE_TABLE_ENTRIES = 0;

const App = () => {

    console.log("supabase testing start");

    if (GENERATE_TABLE_ENTRIES) {
        generate_entries_of_item_table_from_images("Item_t");
        generate_entries_of_supplier_table("supplier_t");
    }
    console.log("supabase testing ends");

    return (
        <>
            <Nav/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
            <Footer/>
        </>

    )
}


export default App;

