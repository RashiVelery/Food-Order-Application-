import React, { useState } from 'react'
import './login.css'


function Login({ setShowLogin }) {

    const [currState, setCurrState] = useState("Sign Up")

    return (
        <div className='login'>
            <form className='loginContainer'>
                <div className='loginTitle'>
                    <h2>{currState}</h2>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => setShowLogin(false)}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>

                </div>
                <div className='loginInput'>
                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' required />
                    }
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Your Password' required />
                </div>
                <button >{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className='loginCondition'>
                    <input type="checkbox" required />
                    <p>By continuing , I Agree to the terms of use & privacy policy</p>
                </div>
                {currState === "Login" ? <p>Create an account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default Login
