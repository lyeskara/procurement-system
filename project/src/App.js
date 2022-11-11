// async call reference: https://stackoverflow.com/questions/49982058/how-to-call-an-async-function
import React from 'react';
import {
    generate_entries_of_item_supplier_table,
    generate_entries_of_item_table_from_images, generate_entries_of_order_table, generate_entries_of_supplier_table,
} from './test_image_population/image_populator'

import {
    Outlet,
    Routes,
    Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Header from "./components/Header"
import Footer from './components/Footer';

import app from './componentCSS/app.css'

import Inventory from './routes/Inventory';
import Login from './routes/Login';
import Home from './routes/Home';
import About from './routes/About';

import Product from "./routes/Product"
import Cart from "./routes/Cart"

import User from './tables/User';
import Db_pop from './routes/populate_db';
import Order from './tables/Order';
import Supplier from './tables/Supplier';

let GENERATE_TABLE_ENTRIES = 0; //to generate db data using the generation functions below change 0 to 1

const AppLayout1 = () => {
    return (
        <>
            <Nav/>
            <Outlet/>
        </>
    )
}

const AppLayout2 = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    )
}


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
           <Routes>
  
              <Route element={<AppLayout1/>}>
                  <Route path ="/" element={<Home/>}  />
                  <Route path ="/About" element={<About/>}  />
                  <Route path ="/inventory" element={<Inventory/>}  />
                  <Route path ="/login" element={<Login/>}  />
                  <Route path ="/orders" element={<Order/>}  />
                  <Route path ="/users" element={<User/>}  />
                  <Route path ="/suppliers" element={<Supplier/>}  />
              </Route>
  
              <Route element={<AppLayout2/>}>
                 <Route path='/product' element={<Product/>}/>
                 <Route path='/cart' element={<Cart/>}/>
              </Route>
  
           </Routes>
        </>
      
      )

}


export default App;

