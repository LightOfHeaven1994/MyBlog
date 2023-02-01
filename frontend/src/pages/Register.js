import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

function Register() {
    const navigate = useNavigate()

    const [inputs, createUser] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [err, setError] = useState(null)

    const handleInput = (e) => {
        createUser(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handleRegister = async e => {
        e.preventDefault()
        try{
            await axios.post('auth/register', inputs)
            navigate("/login")
        }catch(err){
            setError(err.response.data)
        }
    }

    return (
        <div className='auth'>
        <h1 className='auth-header'>Regiser</h1>
        <form className='auth-form'>
            <input required type='text' placeholder='username' onChange={handleInput} name="username"></input>
            <input required type='email' placeholder='email' onChange={handleInput} name="email"></input>
            <input required type='password' placeholder='password' onChange={handleInput} name="password"></input>
            <button onClick={handleRegister}>Register</button>
            {err && <p>{err}</p>}
            <span>In case you have an account <Link to='/login'>Login</Link></span>
        </form>
    </div>
    );
}

export default Register;