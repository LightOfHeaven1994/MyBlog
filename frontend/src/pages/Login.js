import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';

function Login() {
    const navigate = useNavigate()

    const { login } = useAuthContext()

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    })
    const [err, setError] = useState(null)

    const handleInput = (e) => {
        setInputs(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleLogin = async e => {
        e.preventDefault()
        try{
            login(inputs)
            navigate("/")
        }catch(err){
            setError(err.response.data)
        }
    }

    return (
        <div className='auth'>
            <h1 className='auth-header'>Login</h1>
            <form className='auth-form'>
                <input type='text' placeholder='username' onChange={handleInput} name="username"></input>
                <input type='password' placeholder='password' onChange={handleInput} name="password"></input>
                <button onClick={handleLogin}>Login</button>
                {err && <p>{err}</p>}
                <span>In case you don't have an account <Link to='/register'>Register</Link></span>
            </form>
        </div>
    );
}

export default Login;