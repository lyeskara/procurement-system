import React, {useState, useEffect} from 'react'
import axios from 'axios';
import '../tables.css/users.css'

function Order() {

    const [data,setData] = useState([]);
    useEffect(
        ()=>{
    axios.get("http://localhost:5000/order")
    .then((Response)=> { setData(Response.data)  })
        }, []
      );
  return (
    <div>
    
  <div>
  <h1 id='hh'>Users Table</h1>

   <table>
   <thead>
    <tr>
        <th>item</th>
        <th>supplier</th>
        <th>quantity</th>
        <th>fulfilment</th>
    </tr>
   </thead>
   <tbody>
         {
            data.map((order)=>{
                return(
                  <>
                <tr key={order.id}>
                    <td>{order.item_name}</td>
                    <td>{order.supplier_name}</td>
                    <td>{order.quantity}</td>
                    <td>{(order.fulfillment).toString()}</td>
                </tr>
                </>
                )
            })
         } 
   </tbody>
    </table>    
  {/* <h1> name is {user.user_name}</h1>
  <h1>email is {user.email}</h1>
  <h1>password is {user.password}</h1>
  <h1>is supervisor {user.supervisor}</h1> */}
  </div>

 
    </div>
  )
}

export default Order
