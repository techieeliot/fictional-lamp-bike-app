import React from 'react'
import shieldLogo from '../images/logos/logo-orange-shield.svg'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white', 
        textDecorationLine: 'none'
    }
    return(
        <nav className='App-nav'>
            <Link style={navStyle} to='/'>
                <img className="App-logo-xsmall" src={shieldLogo} alt="Biker. A Legendary App. Home"/>
            </Link>
            <ul className='App-nav-links'>
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/localforecast'>
                    <li>Local</li>
                </Link>
                {/* <Link style={navStyle} to='/locationform'>
                    <li>Search</li>
                </Link> */}

                {/* <Link style={navStyle} to='/signup'>
                    <li>Signup</li>
                </Link>
                <Link style={navStyle} to='/login'>
                    <li>Login</li>
                </Link> */}
            </ul>
        </nav>
    )
} 
export default Nav;