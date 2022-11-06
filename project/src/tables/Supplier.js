import React, {useState,useEffect} from 'react'
import axios from 'axios';
import '../tables.css/users.css'

function Supplier() {
    const [data,setData] = useState([]);
    useEffect(
        ()=>{
    axios.get("http://localhost:5000/supplier")
    .then((Response)=> { setData(Response.data)  })
        }, []
      );
  return (
    
  <div>
  <h1 id='hh'>Users Table</h1>

   <table>
   <thead>
    <tr>
        <th>name</th>
       
    </tr>
   </thead>
   <tbody>
         {
            data.map((supplier)=>{
                return(
                <tr key={supplier.id}>
                    <td>{supplier.supplier_name}</td>
                   
                </tr>
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

 
  )
}

export default Supplier
