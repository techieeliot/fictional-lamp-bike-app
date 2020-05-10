import React from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import GoodDay from './GoodDay'
import logo from '../images/logo.svg'
import LocationForm from './LocationForm'

const Home = (props) => {

    return(
        <>
            <Header 
                className='App-header'
                logo={logo} 
                title={props.title}
            />
            <article className='App-article'>
                <h2>{props.articleTitle}!</h2>
                <div className='App-flexbox'>
                    <Button text='Demo' />
                    <Button text='Signup' />
                    <Button text='Login' />
                </div>
                <LocationForm />
                <GoodDay />
            </article> 
            <Footer 
            className="App-footer"
            slogan="A LEGENDARY APP."
            />
        </>
    )
} 

export default Home;