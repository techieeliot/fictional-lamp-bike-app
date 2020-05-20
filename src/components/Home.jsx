import React from 'react'
import Header from './Header'
import Button from './Button'
import LocationForm from './LocationForm'
import { Link } from 'react-router-dom';
import jump from '../images/celebration.svg'
import pinpoint from '../images/pinpoint-map.svg'
import { useWeather } from '../customHooks/useWeather'

const Home = (props) => {

    return(
        <>  
            <Header title={props.title} />
            {/* <main className='App-main'> */}
            <section className='App-section'>
                <h2>{props.articleTitle}</h2>
                <h3>to know if it's a good day for a ride</h3>
                <img 
                    src={jump} 
                    className='App-drawing-medium' 
                    alt='Two girls and a boy jumpting at the same time on a sunny day'
                />
                <p>The Biker App can send your location's 7-day forecast <br />
                and will tell you if today is a good day!</p>
                <p>'Find My Location' below will prompt your device <br />to ask your location.</p>
                <Link to='/localforecast'>
                    <Button text='Find My Location' onSubmit={useWeather} />
                </Link>
            </section>
            <section className='App-section'>
                {/* <p>The Biker App can search and send your city's 7-day forecast.</p>
                <p>Enter any location and submit below</p> */}
                <br />
                <img 
                    src={pinpoint} 
                    className='App-drawing-medium' 
                    alt='A map with pointpont locations across a foldable map'
                />
                {/* <LocationForm /> */}
            </section>
        </>
    )
} 

export default Home;