import React, { useState, useEffect } from 'react'
import Predictions from './Predictions' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, 
    faTint,
    faThermometerThreeQuarters,
    faWind,
    faMotorcycle,
    faExclamationCircle,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons'
import weatherMan from '../images/weather.svg'
import { usePosition } from 'use-position';
import axios from 'axios';
import moment from 'moment'

const LocalForecast = (props) => {
    // get the position coords from the navigator.geolocation
    const watch = false
    const {latitude, longitude } =  usePosition(watch, {enableHighAccuracy: true, maximumAge: 300});

    // local storage persists from previous data call, otherwise empty array
    const initialWeather = () => {
        window.localStorage.getItem('most-recent-weather-data' || [])
        console.log(window.localStorage.getItem('most-recent-weather-data'))
    }
    const [ weather, setWeather ] = useState(initialWeather)
    const weatherStorage = window.localStorage.getItem('most-recent-weather-data')

    useEffect( () => {
        // skip fetch request if local storage exists
        // if (localStorage.getItem('most-recent-weather-data')) return
        // if(weatherStorage && weather !== "undefined"){
        //     return setWeather(weatherStorage)
        // }

        // if position coords, then go to the weather bit api with the lat and lon
        if (typeof latitude !== "undefined" && typeof longitude !== "undefined") {
            axios.get('http://localhost:9036', {
                params: {
                    lat: latitude, 
                    lon: longitude
                }
            })
            .then(response => response.data)
            .then(data => setWeather(data))
            .catch(err => console.log(err));
        }
    }, [latitude, longitude])
        
    // if no position coords, then... 
    // once lat and lon change it will call for the data
    // local storage in next useEffect kicks in after api call

    useEffect( () => {
        // send the data to local storage to use later
        window.localStorage.setItem( 'most-recent-weather-data', JSON.stringify(weather))
    }, [weather])

    // optional chaining for the variables because waiting on API call to fetch data
    const cityName = weather?.city_name
    const stateCode = weather?.state_code
    const countryCode = weather?.country_code
    const todaysWeather = weather?.data?.[0]
    const precipitation = todaysWeather?.pop
    const highTemperature = todaysWeather?.high_temp
    const lowTemperature = todaysWeather?.low_temp
    const windSpeed = todaysWeather?.wind_spd
    const description = todaysWeather?.weather.description

    // hooks for 7-day forecast button
    // on click set to true and save locally
    const initialDisplayPredictions = () => window.localStorage.getItem('displayPredictions') || false
    const [displayPredictions, setDisplayPredictions] = useState(initialDisplayPredictions)
    const sendPredictions = () => { 
        setDisplayPredictions(true)
        console.log(displayPredictions)
    }

    useEffect( () => { 
        window.localStorage.setItem('displayPredictions', displayPredictions)
    }, [displayPredictions])
  
    return(
        <>  
            {/* WEATHER MAN ILLUSTRATION WITH HEADING */}
            <section className='Component-header'>
                <img 
                    src={weatherMan} 
                    className='App-drawing-medium' 
                    alt='A weather man pointing to a partly cloudy good day of the week'
                />
                <h2>{props.articleTitle}</h2>
                <FontAwesomeIcon icon={faTachometerAlt} className='Component-good-day-index-photo'/>
            </section>
            
            {(typeof cityName != 'undefined') ? (
                <>
                <aside className='Component-icon-container'>
                    {/* ADD ICON LOGIC LATER
                    icons in specific ranges
                    <img 
                    src={(iconPath) ? {iconPath} : `${process.env.PUBLIC_URL}images/icons/c01d.png`} 
                    className='Component-icon' 
                    height='100' width='100' 
                    alt='weather description icon'
                /> */}
                </aside>

                {/* IS TODAY A GOOD DAY */}
                <aside className='Component-good-day-container'>
                    {/* TERNARY FOR A GOOD DAY */}
                    {(highTemperature <= 100 && lowTemperature >= 32 && precipitation <= 50 && windSpeed <=25 ) 
                    ? 
                    // TRUE = GOOD DAY OUTPUT
                    <>
                        {/* MESSAGE FOR A GOOD DAY */}
                        <h3 className='Component-good-day-index'>The index results are in...<br />
                            Today is
                        </h3> 
                        <p className='Component-good-day-index-icon-large'>
                            Good...<br />
                            <FontAwesomeIcon icon={faMotorcycle}/><br/>
                            Let's ride!<br />
                            Click the 7-Day Forecast<br />
                            button below to plan <br />
                            more awesome rides.
                        </p>
                    </>
                    : 
                    // TERNARY FALSE = NOT GOOD DAY OUTPUT
                    <>
                        {/* MESSAGE FOR A BAD DAY TO RIDE */}
                        <h3 className='Component-good-day-index'>The index results are in...<br />
                            Today is
                        </h3> 
                        <p className='Component-good-day-index-icon-large'>
                            Not So Good...<br />
                            <FontAwesomeIcon icon={faExclamationCircle}/><br />
                            Tomorrow might be better<br />
                            Click the 7-Day Forecast <br />
                            button below to plan <br />
                            your next ride.
                        </p>
                    </>
                    
                    }
                </aside>

                {/* SECTION FOR THE CITY, DATE, AND CONDITIONS */}
                <article className='Component-content'>
                    <div className='Component-general'>
                        <h3 className='Component-city'>
                            {/* e.g. Clinton, MS, US */}
                            {`${cityName}, ${stateCode}, ${countryCode}`}
                        </h3>
                        <p className='Component-date'>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            {/* Friday May 15th 2020 */}
                            <span> {moment().format('dddd MMMM Do YYYY')}</span> 
                        </p>
                        <p className='Component-status'>
                            {/* Overcast */}
                            {description}
                        </p>
                    </div>
                </article>

                {/* CARDS FOR TODAY'S WEATHER */}
                <section className='Component-details-section Component-margin-bottom App-flexbox'>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faTint}/> <br />
                            Precipitation
                        </h3>
                        <p className='Component-value'>
                            {/* e.g. 30% */}
                            {`${Math.round(precipitation)}%`}
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faThermometerThreeQuarters}/> <br />
                            Temperature
                        </h3>
                        <p className='Component-value'>
                            {/* 75˚ F / 50˚ F */}
                            {`${Math.round(highTemperature)}˚ F / ${Math.round(lowTemperature)}˚ F`}
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faWind}/> <br />
                            Wind
                        </h3>
                        <p className='Component-value'>
                            {/* 5 mph */}
                            {`${Math.round(windSpeed)} mph`}
                        </p>
                    </div>
                </section> 

                {/* BUTTON TOGGLING THE 7-DAY FORECAST */}
                <section className='Component-details-section App-flexbox'>

                    <button className='App-button' onClick={sendPredictions}>{(displayPredictions) ? 'Refresh 7-Day Forecast' : 'See 7-Day Forecast'}</button>
                </section>
                {/* PREDICTIONS IS THE SEVEN-DAY FORECAST */}
                {(displayPredictions) ? <Predictions /> : '' }   
                {/* <Predictions /> */}
            </>
            ) : (
                // UNDEFINED POSITION COORDS AND NO LOCAL STORAGE
            <>
                {/* {setInterval(function(){ 
                            alert("To view your local forecast, the Biker App must be allowed to track your device's locaiton. See the Site Settings of your URL search bar above."); 
                        }, 10000)} */}
                {/* BLANK SECTIONS UNTIL THE API FETCH IS COMPLETE */}
                <aside className='Component-icon-container'>
                {/* icon will change based on state */}
                {/* <img 
                    src={(iconPath) ? {iconPath} : `${process.env.PUBLIC_URL}images/icons/c01d.png`} 
                    className='Component-icon' 
                    height='100' width='100' 
                    alt='weather description icon'
                /> */}
                </aside>

                {/* SECTION FOR THE LOCATION AND CONDITIONS ARE EMPTY */}
                <article className='Component-content'>
                    <div className='Component-general'>
                        <h3 className='Component-city'>
                            Location TBD
                        </h3>
                        <p className='Component-date'>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            {/* Friday May 15, 2020 */}
                            <span> {moment().format('dddd MMMM Do YYYY')}</span> 
                        </p>
                        <p className='Component-status'>Weather TBD</p>
                    </div>
                </article>

                {/* SECTIONS FOR TODAY'S WEATHER EMPTY */}
                <section className='Component-details-section App-flexbox'>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faTint}/> <br />
                            Precipitation
                        </h3>
                        <p className='Component-value'>
                            Loading...
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faThermometerThreeQuarters}/> <br />
                            Temperature
                        </h3>
                        <p className='Component-value'>
                            Loading...
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>
                            <FontAwesomeIcon icon={faWind}/> <br />
                            Wind
                        </h3>
                        <p className='Component-value'>
                            Loading...
                        </p>
                    </div>
                </section>

                {/* <button onClick={}>Not seeing any results? Want help?</button> */}
            </>
        )}
                
        </>
    )
}

export default LocalForecast