import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assests/logo.png"

const Header = () => {
    return (
        <header >
            <nav className=' header flex justify-between px-4'>
                <img src={logo} alt='' height={90} width={100} ></img>
                <ul className='flex justify-center items-center gap-8 text-green-800 '>
                    <li className='color'><Link to="/">Home</Link></li>
                    <li className='color' ><Link to="/about">About Us</Link></li>
                    <li className='color'><Link to="/login">Login</Link></li>
                    <li className='color'><Link to="/signup">Sign Up</Link></li>
                </ul>

            </nav>
        </header>
    );
}

export default Header;
