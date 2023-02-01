import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import Logo from '../img/logo.png'

function Nav() {
    return (
        <div className='nav'>
            <div className='container'>
                <div className='logo'>
                    <img src={Logo}></img>
                </div>
                <div className='nav-items'>
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/projects' className="nav-item nav-link">Projects</Link>
                    <span>Username</span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
}

export default Nav;