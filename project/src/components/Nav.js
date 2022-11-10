import React from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/navbar.css'
import { BsSearch } from "react-icons/bs";
import { useState,useEffect } from 'react'
import {checkCookie, removeCookie, getUserNameCookie} from "../routes/CookieFunction";

function Nav() {

function logout(){
  removeCookie('is_logged_in')
  removeCookie('supervisor')
    window.location.reload();
}


  return (
   <nav>
    <h1><Link to="/" id='link'>Procurement</Link></h1>
    <ul>
      {(() => {
        if (!checkCookie('is_logged_in')) {
          return (
              <>
                <li> <Link to="/login"  id='link'>Login</Link> </li>
              </>
                )
        } else  {
          return (
              <>
                <li> <Link   id='userName'>{getUserNameCookie('is_logged_in').toUpperCase()}</Link> </li>
                <li> <Link onClick={logout} id='link'> Logout </Link></li>
              </>
          )
        }
      })()}
    <li> <Link to="/About"  id='link'>About</Link> </li>

    </ul>
   </nav>
  )
}

export default Nav
