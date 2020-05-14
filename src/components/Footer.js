import React from 'react'
import shieldLogo from '../images/logo-orange-shield.svg'
import wbLogo from '../images/wb-logo.jpg'
import { Link } from 'react-router-dom'

function Footer(props) {
    return(
        <footer className="App-footer">
            <article className='App-footer-logo'>
                <img className="App-logo-small" src={shieldLogo} alt="Biker. A Legendary App."/>
                <p>A LEGENDARY APP.</p>
            </article>
            <article className='App-footer-api-link'>
                <Link to='https://www.weatherbit.io/api'>
                    <img className="App-wb-logo-small" src={wbLogo} alt="Weather Bit API" />
                    <p>Lightning-Quick, Weather API Created by Weatherbit.io</p>
                </Link>
            </article>
            <article className='App-footer-copyright'>
                <Link to='https://techieeliot.github.io/Eliot-Sanford-Portfolio'>
                    <img className="App-wb-logo-small" src={wbLogo} alt="techieEliot" />
                    <p>Created by Eliot Sanford &copy; 2020</p>
                </Link>
            </article>
        </footer> 
    )
} 

export default Footer;