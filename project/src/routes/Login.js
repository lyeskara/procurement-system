import React from 'react'
import { useState,useEffect } from 'react'
import '../componentCSS/login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
//checkCookie('is_logged_in')

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
        setCookie('is_logged_in', true, 1)
        setIsLoggedIn(checkCookie('is_logged_in'))


    }
  })
}


console.log('line 64 isLoggedin: ' + checkCookie('is_logged_in'))

    useEffect(()=>{
        if (IsLoggedIn) {
        navigate("/")}
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
                        <div>"logged in"</div>
                )
                }
            })()}
        </div>
    )



}


export default Login
