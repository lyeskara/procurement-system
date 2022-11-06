import React from 'react'
import {Link} from "react-router-dom";

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


function Template() {
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