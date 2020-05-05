import React from 'react'
import logo from './logo.png'

function Header(props) {
    return(
        <header className="App-header">
            <img className="logo" src={logo} alt="biker app logo"/>
            <h1>{props.title}!</h1>
        </header> 
    )
} 

export default Header;
