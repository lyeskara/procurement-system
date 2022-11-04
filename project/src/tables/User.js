import React ,{useState, useEffect} from 'react'
import axios from 'axios';
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
    
  <div>

   <table>
   <thead>
    <tr>
        <th>name</th>
        <th>email</th>
        <th>password</th>
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

 
    </div>
  )
}

export default User
