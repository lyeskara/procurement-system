import React from 'react';
import {add_to_asset_bucket, find_asset_from_bucket, list_buckets} from './test_image_population/image_populator'
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

const App = () => {
    console.log("supabase testing start");
    fetch_single_entry();
    fetch_whole_table();
    list_buckets();

    let img_link = ""
    find_asset_from_bucket().then(v => {
            console.log("from app:\n");
            console.log(v);
            img_link = v;
        }
    );


    console.log("supabase testing ends");

    return (
        <>
            <Nav/>
            <div>
                {/*<img src={require(img_link)} />*/}
                <img src="https://lytdecmrcglgdghkfpft.supabase.co/storage/v1/object/sign/assets/product_images/cannon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvcHJvZHVjdF9pbWFnZXMvY2Fubm9uLmpwZyIsImlhdCI6MTY2NzQ0MDQyMCwiZXhwIjoxOTgyODAwNDIwfQ.BNUcc8gekDnUZBsTtBlSX4tWU_KP96Bl7SN1YmAMdf0" />

            </div>
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

