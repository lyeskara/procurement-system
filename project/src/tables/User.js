import React ,{useState, useEffect} from 'react'
import axios from 'axios';
import '../tables.css/users.css'
function User() {
    const [data,setData] = useState([]);
    useEffect(
        ()=>{
    axios.get("http://localhost:5000/users")
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
        <th>email</th>
        <th>password</th>
        <th>supervisor</th>
    </tr>
   </thead>
   <tbody>
         {
            data.map((user)=>{
                return(
                <tr key={user.id}>
                    <td>{user.user_name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{(user.supervisor).toString()}</td>
                </tr>
                )
            })
         } 
   </tbody>
    </table>    

  </div>


  )
}

export default User
