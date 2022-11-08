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
                    return (
                        <div>logged in</div>
                    )
                }
            })()}
        </>
    )
}

export default Template