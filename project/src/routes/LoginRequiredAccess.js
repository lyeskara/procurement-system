import React from 'react'
import {Link} from "react-router-dom";
import {checkCookie} from "../routes/CookieFunction";


function LoginRequiredAccess() {
    return (
        <>
            {(() => {
                if (!checkCookie('is_logged_in')) {
                    return (<div>logged out</div>)
                } else  {
                    if (checkCookie('supervisor')){
                        return (
                            <div>logged in as a supervisor</div>
                        )
                    }
                    else {
                        return(
                            <div>logged in as a user</div>
                        )

                    }
                }
            })()}
        </>
    )
}

export default LoginRequiredAccess
