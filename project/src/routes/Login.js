import React from 'react'
import { useState,useEffect } from 'react'
import '../componentCSS/login.css'
import axios from 'axios';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");




function login(){
  const data = {username: username, password:password}
  axios.post("http://localhost:5000/auth/register",data).then((responce)=>{
    console.log(responce.data)
  })
}


  return (
    <>
 

 <div className="loginContainer">
      <label>Username:</label>
      <input
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <label>Password:</label>
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}> Login </button>
    </div>

   </>
  )
}

export default Login