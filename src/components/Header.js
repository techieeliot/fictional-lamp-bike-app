import React from 'react'
import logo from '../images/logo.svg'

function Header(props) {
    return(
        <header className="App-header">
            <img className="App-logo" src={logo} alt="Biker. A Legendary App."/>
            <h1>{`${props.title}!`}</h1>
        </header> 
    )
} 
export default Header;
export { logo };
