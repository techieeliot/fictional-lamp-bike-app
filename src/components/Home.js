import React, { useState, useEffect} from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import Forecast from './Forecast'
import LocationForm from './LocationForm'
import UseCurrentPosition from './UseCurrentPosition'
import { Link } from 'react-router-dom';

const Home = (props) => {

    return(
        <>  
            <Header title={props.title} />
            <main className='App-main'>
                <h2>{`${props.articleTitle}!`}</h2>
                <UseCurrentPosition />
                <Forecast />
                <LocationForm />
                <div className='App-flexbox'> 
                    <Link to='/signup'>
                        <Button text='Signup' />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' />
                    </Link>
                </div>
            </main> 
        </>
    )
} 

export default Home;