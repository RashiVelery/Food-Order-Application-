import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom';


function Login({ setShowLogin }) {

    const navigate = useNavigate();

    const [currState, setCurrState] = useState("Sign Up")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role, setRole] = useState("user")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (currState === "Sign Up") {

            const newUser = { name, email, password, role }

            let users = JSON.parse(localStorage.getItem("users")) || []

            const exist = users.find(u => u.email === email)

            if (exist) {
                alert("User already exists")
                return
            }

            users.push(newUser)

            localStorage.setItem("users", JSON.stringify(users))

            alert("Registration success")

            setCurrState("Login")

        } else {

            const users = JSON.parse(localStorage.getItem("users")) || []

            const user = users.find(u => u.email === email && u.password === password)

            if (!user) {
                alert("Invalid credentials")
                return
            }

            localStorage.setItem("authUser", JSON.stringify(user))

            alert("Login success")
            navigate('/')

            if (user.role === "admin") {
                navigate("/admin")
            } else {
                navigate("/")
            }
        }
    }

    return (
        <div className='login'>
            <form className='loginContainer' onSubmit={handleSubmit}>
                <div className='loginTitle'>
                    <h2>{currState}</h2>

                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => setShowLogin(false)}>
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>

                </div>
                <div className='loginInput'>

                    {currState === "Login" ? <></> : <input type="text" placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    }
                    <input type="email" placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder='Your Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>

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
