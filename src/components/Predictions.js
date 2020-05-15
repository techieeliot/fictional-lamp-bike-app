import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, 
    faTint,
    faThermometerThreeQuarters,
    faWind,
    faMotorcycle,
    faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'
import { waitForElementToBeRemoved } from '@testing-library/react'

const Predictions = (props) => {

    return (
        <>
        
            <section class="Table-seven-day-container">
                <table id="Table-seven-day-1xsHw" class="Table-seven-day">
                <thead>
                    <tr>
                        <th class="Table-seven-day-header">
                            <FontAwesomeIcon icon={faCalendarAlt}/>
                        </th>
                        <th class="Table-seven-day-header">
                            <FontAwesomeIcon icon={faTint}/>
                        </th>
                        <th class="Table-seven-day-header">
                            <FontAwesomeIcon icon={faThermometerThreeQuarters}/>
                        </th>
                        <th class="Table-seven-day-header">
                            <FontAwesomeIcon icon={faWind}/>
                        </th>
                        <th class="Table-seven-day-header">
                            <FontAwesomeIcon icon={faMotorcycle}/>
                        </th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                        </tr>
                        <tr>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                            <td class="Table-seven-day-odd"></td>
                        </tr>
                    </tbody>
                </table>
            </section>
    </>
    )
}

export default Predictions


