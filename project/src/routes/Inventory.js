import React from 'react'
import {useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/inventory.css'
function Inventory() {
  
return(
  <>
  <h1 id='h'>Inventory</h1>
  <div id='choices'>
  <button> <Link to="/users"  id='link'>users</Link> </button>
  <button> <Link to="/orders" id='link'>orders</Link> </button>
  <button> <Link to="/suppliers" id='link'>suppliers</Link> </button>
  </div>
  </>
)
}

export default Inventory
