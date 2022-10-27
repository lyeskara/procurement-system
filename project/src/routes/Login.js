import React from 'react'
import '../componentCSS/login.css'
function Login() {


  return (
    <div className="form">
     <form>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="uname" required />
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="pass" required />
       </div>
       <div className="button-container">
        <button type="submit">Sign up</button>
       </div>
     </form>
   </div>
  )
}

export default Login
