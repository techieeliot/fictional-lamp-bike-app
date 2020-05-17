import React, { useState } from 'react'
import Header, { logo } from './Header'
import Button from './Button'
import { Link } from 'react-dom'
import Footer from './Footer'
import LocationForm from './LocationForm'
import Forecast from './Forecast'

const Success = (props) => {
    const title = 'Success'
    const firstName = 'Eliot'
    return(
        <>
            <Header title={title} />
            <main className='App-main'>
                <h2>{`Hey ${firstName}!`}</h2>
                <LocationForm />
                <Forecast />
                <Link to='/change'>
                    <Button 
                        text='Change Password'
                    />
                </Link>
                <Link to='/'>
                    <Button 
                        text='Logout'
                    />
                </Link>
            </main>
            <Footer />
        </>
    )
}

export default Success