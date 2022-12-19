import React, { useContext, useState } from 'react';
import { UserContext } from "../context/user";
import { useNavigate } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {login} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(user => {
            if (!user.error) {
                login(user)
                navigate('/')
            } else {
                setEmail("")
                setPassword("")
                setError(user.error)
            }
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>email:</label>
                <input 
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> <br/>
                <label>Password:</label>
                <input 
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> <br/>
                <input type="submit" />
            </form>
            <ul>
                <h3>{error}</h3>
            </ul>
        </>

    )
}
export default Login