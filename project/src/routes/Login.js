import {React} from 'react'
import { useState,useEffect } from 'react'
import '../componentCSS/login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {setCookie, checkCookie, removeCookie, getUserNameCookie} from "../routes/CookieFunction";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(checkCookie('is_logged_in'));
  let navigate = useNavigate();


function login(){
    const  url = "http://localhost:5000/login/";
    axios.get(`${url}?email=${email}&password=${password}`).then((responce)=>{

    if (responce.data[0] === undefined){
        console.log('no')
    }else{
        console.log('Hello, ' + responce.data[0].user_name + '.')
        setCookie('is_logged_in', responce.data[0].user_name, 1)
        setIsLoggedIn(checkCookie('is_logged_in'))


    }
  })
}



    useEffect(()=>{
        if (IsLoggedIn) {
            window.location.href = 'http://localhost:3000/'; // redirect home
            }
}, [IsLoggedIn])

    return (
        <div>
            {(() => {
                if (!IsLoggedIn) {
                    return (

                        <>

                            <div className="loginContainer">
                                <label>Email:</label>
                                <input
                                    type="text"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
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

                        </>)
                } else  {
                    return (
                         <div>"logged in "</div>

                )
                }
            })()}
        </div>
    )



}


export default Login
export {checkCookie, removeCookie}

