import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to='/' className="nav-item nav-link active">Home</Link>
            <Link to='/projects' className="nav-item nav-link">Projects</Link>
        </nav>
    );
}

export default Nav;