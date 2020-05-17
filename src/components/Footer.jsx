import React from 'react'
import shieldLogo from '../images/logos/logo-orange-shield.svg'
import wbLogo from '../images/logos/wb-logo.jpg'

function Footer(props) {
    return(
        <>
            {/* FOOTER */}
            <footer className="App-footer">
                <article className='App-footer-logo'>
                    <img className="App-logo-small" src={shieldLogo} alt="Biker. A Legendary App."/>
                    <p>A LEGENDARY APP.</p>
                </article>
                <section className='App-flexbox'>
                    <article className='App-footer-copyright'>
                        <p>&copy; Copyright {new Date().getFullYear()}</p>
                    </article>
                    <article className='App-footer-created-by'>
                        <a href='https://techieeliot.github.io/Eliot-Sanford-Portfolio' target='_blank'>
                        </a>
                        <p className='reduce-space-between'>Created with &#10084; by </p>
                        <span className='duru-font'> 
                            <a href='https://techieeliot.github.io/Eliot-Sanford-Portfolio' target='_blank'>
                                Eliot Sanford 
                            </a>
                        </span>  	
                    </article>
                    <article className='App-footer-api-link'>
                        <a href='https://www.weatherbit.io/api' target='_blank'>
                            <img className="App-wb-logo-small" src={wbLogo} alt="Weather Bit API" />
                            <p>Weather API by Weatherbit.io</p>
                        </a>
                    </article>
                </section>
            </footer> 
        </>
    )
} 

export default Footer;