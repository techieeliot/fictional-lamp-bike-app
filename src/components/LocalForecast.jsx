import React from 'react'
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
// import { useGoodDayIndex } from '../customHooks/useGoodDayIndex'
import { useWeather } from '../customHooks/useWeather'
import moment from 'moment'

const LocalForecast = (props) => {
    const weather = useWeather();

    const cityName = weather.city_name
    const stateCode = weather.state_code
    const countryCode = weather.country_code
    const todaysWeather = weather.data?.[0]
    const precipitation = todaysWeather?.pop
    const highTemperature = todaysWeather?.high_temp
    const lowTemperature = todaysWeather?.low_temp
    const windSpeed = todaysWeather?.wind_spd
    const description = todaysWeather?.weather.description

    // const goodDayIndex = useGoodDayIndex(highTemperature, lowTemperature, precipitation, windSpeed)
    console.log(weather)
    return(
        <>  
            {/* WEATHER MAN ILLUSTRATION WITH HEADING */}
            <section>
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
                        <h3 className='Component-good-day-index'>The index results are in...<br />
                            Today is
                        </h3> 
                        <p className='Component-good-day-index-icon-large'>
                            Good...<br />
                            <FontAwesomeIcon icon={faMotorcycle}/><br/>
                            Let's ride!
                        </p>
                    </>
                    : 
                    // TERNARY FALSE = NOT GOOD DAY OUTPUT
                    <>
                        <h3 className='Component-good-day-index'>The index results are in...<br />
                            Today is
                        </h3> 
                        <p className='Component-good-day-index-icon-large'>
                            Not So Good...<br />
                            <FontAwesomeIcon icon={faExclamationCircle}/><br />
                            See the 7-day forecast <br />to plan your next ride.
                        </p>
                    </>
                    
                    }
                </aside>
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
                <section className='Component-details-section App-flexbox'>
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
                {/* PREDICTIONS IS THE SEVEN-DAY FORECAST */}
                <Predictions />       
            </>
            ) : (
            <>
                {/* THE BLANK SECTIONS UNTIL THE API FETCH IS COMPLETE */}
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
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            {/* Friday May 15, 2020 */}
                            <span> {moment().format('dddd MMMM Do YYYY')}</span> 
                        </p>
                        <p className='Component-status'>{(description) ? description : 'Weather TBD'}</p>
                    </div>
                </article>
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
            </>
            )}
            
        </>
    )
}

export default LocalForecast