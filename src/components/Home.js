import React, { useState, useEffect} from 'react'
import Header from './Header'
import Button from './Button'
import LocationForm from './LocationForm'
import { Link } from 'react-router-dom';

const Home = (props) => {

    return(
        <>  
            <Header title={props.title} />
            <main className='App-main'>
                <h2>{`${props.articleTitle}!`}</h2>
                <p>The Biker App will only request your location with your permission.</p>
                <p>When you select 'Find My Location' below, 
                    you'll be prompted by your device to allow your location to be known.</p>
                <Link to='/localforecast'>
                    <Button text='Find My Location' />
                </Link>
                <LocationForm />
                {/* <div className='App-flexbox'> 
                    <Link to='/signup'>
                        <Button text='Signup' />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' />
                    </Link>
                </div> */}
            </main> 
        </>
    )
} 

export default Home;