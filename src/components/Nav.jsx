import React from 'react'
import shieldLogo from '../images/logos/logo-orange-shield.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream,
    faCheckCircle,
    faTimesCircle,
    faSearch,
    faHome,
    faMapPin
} from '@fortawesome/free-solid-svg-icons'

function Nav() {
    const navStyle = {
        color: 'white', 
        textDecorationLine: 'none'
    }
    let criteria = false
    return(
        <nav className='App-nav'>
            {/* LOGO FAR LEFT */}
            <Link style={navStyle} to='/'>
                <img className="App-logo-xsmall" src={shieldLogo} alt="Biker. A Legendary App. Home"/>
            </Link>

            {/* NAV LINKS RIGHT SIDE */}
            <ul className='App-nav-links'>
                <Link style={navStyle} to='/'>
                    <li>
                        Home
                        <span> </span>
                        <FontAwesomeIcon icon={faHome} className='Nav-fa-xsmall'/>
                    </li>
                </Link>
                <Link style={navStyle} to='/localforecast'>
                    <li>
                        Local
                        <span> </span>
                        <FontAwesomeIcon icon={faSearch} className='Nav-fa-xsmall'/>
                    </li>
                </Link>

                {/* ADD THIS FEAT LATER ONCE IT'S ADDED */}
                {/* <Link style={navStyle} to='/locationform'>
                    <li>
                        Search
                        <span> </span>
                        <FontAwesomeIcon icon={faMapPin} className='Nav-fa-xsmall'/>
                    </li>
                </Link> */}
                <Link style={navStyle} to='/criteria'>
                    <li>
                        Criteria
                        <span> </span>
                        <FontAwesomeIcon icon={faStream} className='Nav-fa-xsmall'/>
                        { (criteria) ? <FontAwesomeIcon icon={faCheckCircle} className='Nav-fa-xsmall Nav-green'/>:
                        <FontAwesomeIcon icon={faTimesCircle} className='Nav-fa-xsmall Nav-red'/>}
                    </li>
                </Link>

                {/* ADD THESE ITEMS LATER IF NECESSARY */}
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