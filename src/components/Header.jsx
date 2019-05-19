import React from 'react';
import {Link} from 'react-router-dom';
import './css/Header.css';


const Header = props=>{
    return(
        <div className="navbar  justify-content-center d-flex" id="header-container">

            <Link to={'/'} >
                <h1>COME SANO</h1>
            </Link>
        </div>
    );
}

export default Header;