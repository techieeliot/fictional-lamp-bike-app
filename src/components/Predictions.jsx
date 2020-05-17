import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, 
    faTint,
    faThermometerThreeQuarters,
    faWind,
    faMotorcycle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { waitFor, waitForElementToBeRemoved } from '@testing-library/react'

const Predictions = (weatherData) => {
    // let todaysDate = weatherData?.[0].datetime
    
    // console.log(todaysDate)
    return (
        <>
        
            <section className="Table-seven-day-container">
                <table id="Table-seven-day-1xsHw" className="Table-seven-day">
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
                            <FontAwesomeIcon icon={faMotorcycle}/>
                        </th>
                    </tr>
                </thead>
                <div>
                    
                {/* {(typeof todaysDate != 'undefined') ? todaysDate : 'nothing'} */}
                </div>
                <tbody>
                    <tr>
                        <td>Sun</td>
                        <td>90%</td>
                        <td>82/66F</td>
                        <td>8 mph</td>
                        <td>
                            { 
                            <FontAwesomeIcon icon={faExclamationCircle}/>
                            } 
                        </td>
                    </tr>
                    <tr>
                        <td className="Table-seven-day-row">Mon</td>
                        <td className="Table-seven-day-row">100%</td>
                        <td className="Table-seven-day-row">100/100F</td>
                        <td className="Table-seven-day-row">100 mph</td>
                        <td className="Table-seven-day-row">
                            { <FontAwesomeIcon icon={faExclamationCircle}/> } 
                        </td>
                    </tr>
                </tbody>
                </table>
            </section>
    </>
    )
}

export default Predictions


