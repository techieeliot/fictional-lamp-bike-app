import React, { useState } from 'react'
import Header, { logo } from './Header'
import Input from './Input'
import Button from './Button'
import Footer from './Footer'

const Success = (props) => {

    return(
        <>
            <Header title={props.title} />
            <main id="container">
                <h2>{`Hey ${props.user.firstName}!`}</h2>
                <Button 
                    // onClick={() =>props.setRoute('changePass')}
                    text='Change Password'
                />
                <Button 
                    // onClick={() =>props.onLogout('main')}
                    text='Logout'
                />
            </main>
        </>
    )
}

export default Success