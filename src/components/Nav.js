import React from 'react'
import shieldLogo from '../images/logo-orange-shield.svg'
import { Link } from 'react-router-dom'
import { white } from 'color-name'

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
                    <li>Demo</li>
                </Link>
                <Link style={navStyle} to='/signup'>
                    <li>Signup</li>
                </Link>
                <Link style={navStyle} to='/login'>
                    <li>Login</li>
                </Link>
            </ul>
        </nav>
    )
} 
export default Nav;