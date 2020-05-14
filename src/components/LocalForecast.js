import React, { useEffect, useRef, useState } from 'react'
import { usePosition } from 'use-position';
import axios from 'axios';
import UseCurrentPosition from './UseCurrentPosition';
import { Link } from 'react-router-dom'

    
const LocalForecast = (props) => {
    const watch = true;
    const { latitude, longitude } =  usePosition(watch, {enableHighAccuracy: true, maximumAge: 300});
    const [ weather, setWeather ] = useState([])
    const [toggle, setToggle] = useState(false)
    
    const firstRender = useRef(true)
    const location = {
        'latitude': `${latitude}`, 
        'longitude': `${longitude}`
    }

    useEffect( () => {
        if (firstRender.current) {
            firstRender.current = false
            return
        } else {  
            axios.get('http://localhost:8080', {
                params: {
                    lat: latitude, 
                    lon: longitude
                }
            })
            .then((response) => response.data)
            .then((data) => setWeather(data))
            .catch(err => console.log(err));
            console.log(weather)
        }
       
    }, [toggle])

    useEffect(()=>{
        if(toggle){
            return
        } else if (location.latitude != '' || location.latitude != undefined){
            setToggle(!toggle)
            console.log(toggle)
        } 
    }, [location])
    
    return(
        <section className='App-forecast'>
            <aside className='Component-icon-container'>
                <canvas className='Component-icon' height='100' width='100'></canvas>
            </aside>
            <h2></h2>
            <UseCurrentPosition />
            <article className='Component-content'>
                <div className='Component-general'>
                    <h3 className='Component-status'>Enter a Location</h3>
                    <p className='Component-location'>To Find the Weather</p>
                </div>
            </article>
        </section>
    )
}

export default LocalForecast