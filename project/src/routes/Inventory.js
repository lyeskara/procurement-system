import React from 'react'
import {useState , useEffect} from 'react'
import { Link } from "react-router-dom";
import '../componentCSS/inventory.css'
import {checkCookie} from "./CookieFunction";
// function Inventory() {
//
// return(
//   <>
//   <h1 id='h'>Inventory</h1>
//   <div id='choices'>
//   <button> <Link to="/users"  id='link'>users</Link> </button>
//   <button> <Link to="/orders" id='link'>orders</Link> </button>
//   <button> <Link to="/suppliers" id='link'>suppliers</Link> </button>
//   </div>
//   </>
// )
// }
//
// export default Inventory

function Inventory() {
  console.log(!checkCookie('is_logged_in'),!checkCookie('supervisor'))
  return (
      <>
        {(() => {
          if (checkCookie('is_logged_in') && checkCookie('supervisor')) {
            return(
                  <>
                  <h1 id='h'>Inventory</h1>
                  <div id='choices'>
                  <button> <Link to="/users"  id='link'>Users</Link> </button>
                  <button> <Link to="/orders" id='link'>Orders</Link> </button>
                  <button> <Link to="/suppliers" id='link'>Suppliers</Link> </button>
                  <button> <Link to="/items" id='link'>Items</Link> </button>
                  <button> <Link to="/quotations" id='link'>Quotations</Link> </button>
                  </div>
                  </>
)
          } else  {
            return (
              <div id='choices'>
                <div id="f">
                  ⚠️Access Forbidden⚠️<br/>
                </div>
              </div>
            )
          }
        })()}
      </>
  )

}

export default Inventory
