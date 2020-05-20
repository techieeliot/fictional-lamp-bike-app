import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, 
    faTint,
    faThermometerThreeQuarters,
    faWind,
    faMotorcycle,
    faExclamationCircle,
    faTachometerAlt,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons'
import { useGoodDayIndex } from '../customHooks/useGoodDayIndex'
import { useWeather } from '../customHooks/useWeather'
import moment from 'moment'

const Predictions = (weatherData) => {
    const weather = useWeather();
   
    return (
        <>  
            {/* TABLE FOR THE 7-DAY FORECAST */}
            <section className="Table-seven-day-container">
                <h3>This week's forecast...</h3>
                <table id="Table-forecast" className="Table-seven-day">
                <thead>
                    <tr>
                        <th className="Table-seven-day-header">
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </th>
                        <th className="Table-seven-day-header">
                            <FontAwesomeIcon icon={faTint}/>
                        </th>
                        <th className="Table-seven-day-header">
                            <FontAwesomeIcon icon={faThermometerThreeQuarters}/>
                        </th>
                        <th className="Table-seven-day-header">
                            <FontAwesomeIcon icon={faWind}/>
                           
                        </th>
                        <th className="Table-seven-day-header">
                            <FontAwesomeIcon icon={faTachometerAlt}/>
                            
                        </th>
                    </tr>
                </thead>
                {/* IF THE DATA HAS COME BACK FROM THE API, THEN...
                LOOP OVER THE WEEK AHEAD AND GENERATE TABLE ROWS FOR EACH DAY*/}
                <tbody>
                    {(typeof weather.data != 'undefined') ? 
                    weather.data.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {/* e.g. Mon. */}
                                    {moment(data.datetime).format('ddd')}
                                </td>
                                <td>
                                    {`${data.pop}%`}
                                </td>
                                <td>
                                    {`${Math.round(data.high_temp)}/${Math.round(data.low_temp)}F`}
                                </td>
                                <td>
                                    {`${Math.round(data.wind_spd)}m`}
                                </td>
                                <td>
                                    {
                                        (data.high_temp <= 100 && data.low_temp >= 32 && data.pop <= 50 && data.wind_spd <=25)
                                        ? <FontAwesomeIcon icon={faMotorcycle}/> :
                                        <FontAwesomeIcon icon={faExclamationCircle}/>
                                    } 
                                </td>
                            </tr>
                        )
                        
                    })
                    : (
                        // IF THE DATA IS NOT AVAILABLE FROM THE API YET, THEN...
                        // SEND EMPTY ROWS
                        <tr>
                            <td>Loading... </td>
                            <td>Loading... </td>
                            <td>Loading... </td>
                            <td>Loading... </td>
                            <td>Loading... </td>
                        </tr>
                    ) 
                    
                }
                </tbody>
                </table>
                {/* LEGEND FOR ICONS ON TABLE */}
                <section className='Table-legend-container'>
                    <h4>Legend</h4>
                    <article className='Table-legend'>
                        <p>Good Day Index = <FontAwesomeIcon icon={faTachometerAlt}/></p>
                        <p>Day = <FontAwesomeIcon icon={faCalendarAlt}/></p>
                        <p>Good Day = <FontAwesomeIcon icon={faMotorcycle}/></p>
                        <p>Chance of Rain = <FontAwesomeIcon icon={faTint}/></p>
                        <p>Not So Good Day = <FontAwesomeIcon icon={faExclamationCircle}/></p>
                        <p>High and Low Temp = <FontAwesomeIcon icon={faThermometerThreeQuarters}/></p>
                         <p></p> {/* EMPTY P FOR FLEXBOX */}
                        <p>Wind Speed = <FontAwesomeIcon icon={faWind}/></p>
                    </article>
                </section>
            </section>
        
    </>
    )
}

export default Predictions