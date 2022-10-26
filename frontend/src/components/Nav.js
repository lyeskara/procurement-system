import React from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/navbar.css'
import { BsSearch } from "react-icons/bs";

function nav() {
  return (
   <nav>
    <h1><Link to="/" id='link'>Procurement</Link></h1>

    <ul>
    <li><Link to="/inventory"  id='link'>Inventory</Link></li>
    <li> <Link to="/login"  id='link'>Login</Link> </li>
    <li> <Link to="/About"  id='link'>About</Link> </li>
    </ul>
   </nav>
  )
}

export default nav
