import React from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/navbar.css'
import { BsSearch } from "react-icons/bs";
import { useState,useEffect } from 'react'



function Nav() {
const [IsLoggedIn, setIsLoggedIn] = useState(checkCookie('is_logged_in'));

    useEffect(()=>{
    }, [IsLoggedIn])


function logout(){
  removeCookie('is_logged_in')
    setIsLoggedIn(checkCookie('is_logged_in'))

}

function checkCookie(name) {
    var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
      console.log(match[2]);
      return true;
    }
    else{
      console.log('Cookie not found');
      return false;
    }
  }

function removeCookie(name)
{
var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
if (match) {
  document.cookie = name + "=" +
      ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
}
else{
  console.log('Cookie already removed.');
}
}

  return (
   <nav>
    <h1><Link to="/" id='link'>Procurement</Link></h1>
    <ul>
      {(() => {
        if (!checkCookie('is_logged_in')) {
          return (<li> <Link to="/login"  id='link'>Login</Link> </li>)
        } else  {
          return (
              <li> <Link onClick={logout} id='link'> Logout </Link></li>
          )
        }
      })()}
    <li> <Link to="/About"  id='link'>About</Link> </li>
    </ul>
   </nav>
  )
}

export default Nav

