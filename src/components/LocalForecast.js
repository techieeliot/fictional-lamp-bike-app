import React, { useEffect, useRef, useState } from 'react'
import { usePosition } from 'use-position';
import axios from 'axios';
import biker from '../images/woman-on-motorcycle-silhouette.png'
import reload from '../images/reload.svg'
// import iconDirName from '../images/icons/'

const LocalForecast = (props) => {
    const watch = false
    const {latitude, longitude } =  usePosition(watch, {enableHighAccuracy: true, maximumAge: 300});
    const [ weather, setWeather ] = useState([])
    
    const firstRender = useRef(true)

    useEffect( () => {
        if (firstRender.current) {
            firstRender.current = false
            return
        } else 
        if (latitude && longitude) {
            axios.get('http://localhost:8080', {
                params: {
                    lat: latitude, 
                    lon: longitude
                }
            })
            .then(response => response.data)
            .then(data => setWeather(data))
            // .then(data => setData(data.data))
            // .then(data => setToday(data.data[0]))
            .catch(err => console.log(err));
        }
    }, [latitude, longitude])
    // console.log(weather.data[0])
    // let description = weather.weather.description
    let cityName = weather.city_name
    let stateCode = weather.state_code
    let countryCode = weather.country_code

    let todaysWeather = weather.data?.[0]
    let precipitation = todaysWeather?.pop
    let highTemperature = todaysWeather?.high_temp
    let lowTemperature = todaysWeather?.low_temp
    let windSpeed = todaysWeather?.wind_spd
    let iconCode = todaysWeather?.weather.icon
    let description = todaysWeather?.weather.description
    // let iconPath = `${iconDirName}${iconCode}.png`

    console.log(weather.data?.[0].weather.icon)
    // console.log(iconPath)
    console.log(typeof cityName)

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day} ${month} ${date}, ${year}`
      }

    const useGoodDayIndex = (high, low, rain, wind) => {
        if (high <= 100 && low >= 32 && rain >= 40 && wind >=25 ){
            return true
        } else{
            return false
        }
    }

    const goodDayIndex = useGoodDayIndex(highTemperature, lowTemperature, precipitation, windSpeed)


   
    return(
        <>  
            {/* {weather.map(data => `<h1>${data}</h1>`)} */}
            <h2>{props.articleTitle}</h2>
            
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
                <aside className='Component-good-day-container'>
                    <h3 className='Component-good-day-index'>
                        {(goodDayIndex)? "Today is good day! Let's ride!" : "Today is a not so good. Try again tomorrow." }
                    </h3>
                    <img 
                        src={(goodDayIndex)? biker : reload } className='Component-good-day-index-photo-large' 
                        alt='Good day indicator' 
                    />
                </aside>
                <article className='Component-content'>
                    <div className='Component-general'>
                        <h3 className='Component-city'>
                            {/* e.g. Clinton, MS, US */}
                            {`${cityName}, ${stateCode}, ${countryCode}`}
                        </h3>
                        <p className='Component-date'>
                            {/* Friday May 15, 2020 */}
                            {dateBuilder(new Date())}
                        </p>
                        <p className='Component-status'>
                            {/* Overcast */}
                            {description}
                        </p>
                    </div>
                </article>
                <section className='Component-details-section App-flexbox'>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Precipitation</h3>
                        <p className='Component-value'>
                            {/* e.g. 30% */}
                            {`${Math.round(precipitation)}%`}
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Temperature</h3>
                        <p className='Component-value'>
                            {/* 75˚ F / 50˚ F */}
                            {`${Math.round(highTemperature)}˚ F / ${Math.round(lowTemperature)}˚ F`}
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Wind</h3>
                        <p className='Component-value'>
                            {/* 5 mph */}
                            {`${Math.round(windSpeed)} mph`}
                        </p>
                    </div>
                </section>
            </>
            ) : (
            <>
                <aside className='Component-icon-container'>
                {/* icon will change based on state */}
                {/* <img 
                    src={(iconPath) ? {iconPath} : `${process.env.PUBLIC_URL}images/icons/c01d.png`} 
                    className='Component-icon' 
                    height='100' width='100' 
                    alt='weather description icon'
                /> */}
                </aside>
                <article className='Component-content'>
                    <div className='Component-general'>
                        <h3 className='Component-city'>
                            Location TBD
                        </h3>
                        <p className='Component-date'>
                            {/* Friday May 15, 2020 */}
                            {dateBuilder(new Date())}
                        </p>
                        <p className='Component-status'>{(description) ? description : 'Weather TBD'}</p>
                    </div>
                </article>
                <section className='Component-details-section App-flexbox'>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Precipitation</h3>
                        <p className='Component-value'>
                            TBD
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Temperature</h3>
                        <p className='Component-value'>
                            TBD
                        </p>
                    </div>
                    <div className='Component-detail'>
                        <h3 className='Component-title'>Wind</h3>
                        <p className='Component-value'>
                            TBD
                        </p>
                    </div>
                </section>
            </>
            )}
            
        </>
    )
}

export default LocalForecast