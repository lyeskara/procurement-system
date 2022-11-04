import React from 'react'
import {useState , useEffect} from 'react'
import { Link } from "react-router-dom";

function Inventory() {
  
return(
  <ul>
  <li> <Link to="/users"  >users</Link> </li>
  <li> <Link to="/orders" >orders</Link> </li>
  <li> <Link to="/suppliers" >suppliers</Link> </li>

  </ul>
)
}

export default Inventory
