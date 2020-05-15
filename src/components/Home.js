import React, { useState, useEffect} from 'react'
import Header from './Header'
import Button from './Button'
import LocationForm from './LocationForm'
import { Link } from 'react-router-dom';

const Home = (props) => {

    return(
        <>  
            <Header title={props.title} />
            {/* <main className='App-main'> */}
            <h2>{props.articleTitle}</h2>
            <p>The Biker App can send your location's 7-day forecast.</p>
            <p>Plus, the Biker App will tell you if today is a good day</p>
            <p>'Find My Location' below will prompt your device to ask your location.</p>
            <Link to='/localforecast'>
                <Button text='Find My Location' />
            </Link>

            <p>The Biker App can search and send your city's 7-day forecast.</p>
            <p>Enter any location and submit below</p>
            <LocationForm />
                {/* <div className='App-flexbox'> 
                    <Link to='/signup'>
                        <Button text='Signup' />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' />
                    </Link>
                </div> */}
            {/* </main>  */}
        </>
    )
} 

export default Home;