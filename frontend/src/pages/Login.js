import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='auth'>
            <h1 className='auth-header'>Login</h1>
            <form className='auth-form'>
                <input type='text' placeholder='username'></input>
                <input type='password' placeholder='password'></input>
                <button>Login</button>
                <p>Ooups.. Someting went wrong!</p>
                <span>In case you don't have an account <Link to='/register'>Register</Link></span>
            </form>
        </div>
    );
}

export default Login;