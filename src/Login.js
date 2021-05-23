import React from 'react'
import "./Login.css"

import {auth} from "./firebase";

function Login() {
    const signIn = () => {

    }

    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://www.unixmen.com/wp-content/uploads/2013/04/Google-Whatsapp4.jpg" alt="Login Google" />
            <div className="loginText">
                <h3>Login into WhatsApp!</h3>
            </div>
            <button onClick={signIn}>Sign In</button>
            </div>
        </div>
    )
}

export default Login
