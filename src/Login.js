import React from 'react'
import "./Login.css"

import {useStateValue} from "./StateProvider";
import {actionTypes} from "./Reducer";

import {auth, provider} from "./firebase";

function Login() {
    const [{}, dispatch] = useStateValue();


    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            // console.log(result));
        })
        .catch((error) => console.log(error.message));
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
