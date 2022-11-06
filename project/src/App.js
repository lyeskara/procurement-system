// async call reference: https://stackoverflow.com/questions/49982058/how-to-call-an-async-function
import React from 'react';
import {
    generate_entries_of_item_supplier_table,
    generate_entries_of_item_table_from_images, generate_entries_of_order_table, generate_entries_of_supplier_table,
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
import User from './tables/User';
import Db_pop from './routes/populate_db';
import app from './componentCSS/app.css'
import Order from './tables/Order';
import Supplier from './tables/Supplier';

let GENERATE_TABLE_ENTRIES = 0; //to generate db data using the generation functions below change 0 to 1

const App = ()=>{

    console.log("supabase testing start");
    if (GENERATE_TABLE_ENTRIES) {
        // generate_entries_of_item_supplier_table("item_supplier_t", "Item_t", "supplier_t", 1)

        generate_entries_of_item_table_from_images("Item");
        generate_entries_of_supplier_table("supplier");
        generate_entries_of_item_supplier_table("item_supplier", "Item", "supplier", 0)
        generate_entries_of_order_table("orders", "item_supplier")
    }
    console.log("supabase testing ends");

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

