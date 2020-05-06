import React from 'react'
import logo from '../images/logo-orange-shield.svg'

function Footer(props) {
    return(
        <footer className="App-footer">
            <img className="logo-small" src={logo} alt="Biker. A Legendary App."/>
            <p>{props.slogan}</p>
        </footer> 
    )
} 

export default Footer;