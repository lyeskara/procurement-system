import React from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/navbar.css'
import { BsSearch } from "react-icons/bs";

function nav() {
  return (
   <nav>
    <h1><Link to="/About" id='link'>Procurement</Link></h1>
    <form action="/" method="get">
    
        <input
            type="text"
            id="header-search"
            placeholder="Search Here"
            name="s" 
        />
        <button type="submit"> <BsSearch/> </button>
    </form>
    <ul>
    <li><Link to="/inventory"  id='link'>Inventory</Link></li>
    <li> <Link to="/login"  id='link'>Login</Link> </li>
    <li> <Link to="/About"  id='link'>About</Link> </li>
    </ul>
   </nav>
  )
}

export default nav
