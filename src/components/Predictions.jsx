import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, 
    faTint,
    faThermometerThreeQuarters,
    faWind,
    faMotorcycle,
    faExclamationCircle,
    faTachometerAlt
} from '@fortawesome/free-solid-svg-icons'
// import { useGoodDayIndex } from '../customHooks/useGoodDayIndex'
import { useWeather } from '../customHooks/useWeather'
import moment from 'moment'

const Predictions = (weatherData) => {
    // let todaysDate = weatherData?.[0].datetime
    const weather = useWeather();
    // const index = useGoodDayIndex()
    return (
        <>
            <section className="Table-seven-day-container">
                <h3>This week's forecast...</h3>
                <p>Good Day = <FontAwesomeIcon icon={faMotorcycle}/></p>
                <p>Not So Good Day = <FontAwesomeIcon icon={faExclamationCircle}/></p>
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
                                        (data.high_temp <= 100 && data.low_temp >= 32 && data.pop <= 50 && data.wind_spd <=25 ) 
                                        ? <FontAwesomeIcon icon={faMotorcycle}/> :
                                        <FontAwesomeIcon icon={faExclamationCircle}/>
                                    } 
                                </td>
                            </tr>
                        )
                    
                    })
                    : (

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
            </section>
    </>
    )
}

export default Predictions


