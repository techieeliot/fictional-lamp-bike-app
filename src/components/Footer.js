import React from 'react'
import shieldLogo from '../images/logo-orange-shield.svg'

function Footer(props) {
    return(
        <footer className="App-footer">
            <img className="App-logo-small" src={shieldLogo} alt="Biker. A Legendary App."/>
            <p>{props.slogan}</p>
        </footer> 
    )
} 

export default Footer;