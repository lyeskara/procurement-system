import {React} from 'react'
import { useState,useEffect } from 'react'
import '../componentCSS/login.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {setCookie, checkCookie, removeCookie} from "../routes/CookieFunction";


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
        console.log('Hello, ' + responce.data[0] + '.')

        setCookie('is_logged_in', responce.data[0].user_name, 1)
        if (responce.data[0].supervisor == true){
            setCookie('supervisor',responce.data[0].supervisor,1 )

        }
        setIsLoggedIn(checkCookie('is_logged_in'))


    }
  })
}

//
//     useEffect(()=>{
//         if (IsLoggedIn) {
//             window.location.href = 'http://localhost:3000/'; // redirect home
//             }
// }, [IsLoggedIn])

    return (
        <div>
            {(() => {
                if (!IsLoggedIn) {
                    return (

                        <>

                            <div className="loginContainer gradient-custom">
                              <div class="form-outline form-white mb-4" style={{width:"50%" ,  margin: "auto", width: "50%",padding: "10px"}}>
                                  <label class="form-label">Email:</label>
                                <input
                                class="form-control form-control-lg"
                                    type="text"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                                </div>
                                <div class="form-outline form-white mb-4" style={{width:"50%" ,  margin: "auto", width: "50%",padding: "10px"}}>

                                <label class="form-label">Password:</label>

                                <input
                                 class="form-control form-control-lg"
                                    type="password"
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                                </div>

                                <button class="btn btn-outline-light btn-lg px-5"  style={{ marginLeft:"42%"}} onClick={login}> Login </button>
                            </div>

                        </>)
                } else  {
                    return (
                        <>
                            <div>"logged in "</div>
                            {window.location.href = 'http://localhost:3000/'}
                        </>


                )
                }
            })()}
        </div>
    )



}


export default Login
export {checkCookie, removeCookie}

