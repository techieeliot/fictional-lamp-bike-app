import React from 'react'
import Header from './Header'
import Button from './Button'
import LocationForm from './LocationForm'
import { Link } from 'react-router-dom';
import jump from '../images/celebration.svg'
import pinpoint from '../images/pinpoint-map.svg'

const Home = (props) => {

    return(
        <>  
            <Header title={props.title} />
            {/* <main className='App-main'> */}
            <section className='App-section'>
                <h2>{props.articleTitle}</h2>
                <img 
                    src={jump} 
                    className='App-drawing-medium' 
                    alt='Two girls and a boy jumpting at the same time on a sunny day'
                />
                <p>The Biker App can send your location's 7-day forecast <br />
                and will tell you if today is a good day!</p>
                <p>'Find My Location' below will prompt your device to ask your location.</p>
                <Link to='/localforecast'>
                    <Button text='Find My Location' />
                </Link>
            </section>
            <section className='App-section'>
                <p>The Biker App can search and send your city's 7-day forecast.</p>
                <p>Enter any location and submit below</p>
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