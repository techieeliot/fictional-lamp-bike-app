import React, { useEffect, useState } from 'react'
import { usePosition } from 'use-position';
import axios from 'axios';
    
const Forecast = (props) => {
    const watch = true;
    const {latitude, longitude, error} =  usePosition(watch, {enableHighAccuracy: true});
    const [weather, setWeather] = useState([])
    
    const location = usePosition()
    useEffect(()=> {
        if(latitude){
            axios.get('http://localhost:8080', {
                params: {
                    lat: latitude, 
                    lon: longitude
                }
            })
            .then((response) => response.data)
            .then(data => setWeather(data))
            .catch(err => console.log(err));
        }
    }, [location])
    
    return(
        <section className='App-good-day'>
            <h1>Today is</h1>
            {/* {weather} */}
            {/* <h2>Today is a Good Day</h2>
            <img src={``} alt="Current Weather" width="75vw" height="auto" />
            <p>High Temperature: {weather[0]}</p>
            <p>Chance of Precipitation: 5%</p>
            <p>Average Wind Speed: 10 mph</p> */}
        </section>
    )
}

export default Forecast