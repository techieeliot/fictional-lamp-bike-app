import React from 'react'

const GoodDay = (props) => {
    const isGoodDay = () => {

    }
    return(
        <section className='App-good-day'>
            <h2>Today is a Good Day</h2>
            <img src={``} alt="Current Weather" width="75vw" height="auto" />
            <p>Average Temperature: 75 F</p>
            <p>Chance of Precipitation: 5%</p>
            <p>Average Wind Speed: 10 mph</p>
        </section>
    )
}

export default GoodDay