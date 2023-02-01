import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className='auth'>
        <h1 className='auth-header'>Regiser</h1>
        <form className='auth-form'>
            <input required type='text' placeholder='username'></input>
            <input required type='email' placeholder='email'></input>
            <input required type='password' placeholder='password'></input>
            <button>Register</button>
            <p>Ooups.. Someting went wrong!</p>
            <span>In case you have an account <Link to='/login'>Login</Link></span>
        </form>
    </div>
    );
}

export default Register;