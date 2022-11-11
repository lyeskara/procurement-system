import React from 'react';
import {
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
import Order from './tables/Order';
import Supplier from './tables/Supplier';
import Quotations from "./tables/Quotations";

const App = () => {
    return (
        <>
            <Nav/>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/inventory" element={<Inventory/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/orders" element={<Order/>}/>
                <Route path="/users" element={<User/>}/>
                <Route path="/suppliers" element={<Supplier/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path="/quotations" element={<Quotations/>}/>
            </Routes>
        </>

    )
}

export default App;