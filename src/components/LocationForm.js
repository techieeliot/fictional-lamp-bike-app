import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'


const LocationForm = (props) => {
    const [locationForm, setLocationForm] = useState([])

    const handleChange = e => {
        setLocationForm({
            ...locationForm,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        
        const formData = new FormData();
        formData.append('city-search', locationForm.username);
        formData.append('password', locationForm.password);
        formData.append('verifyPassword', locationForm.verifyPassword);
        formData.append('firstName', locationForm.firstName);
        formData.append('lastName', locationForm.lastName);
        formData.append('phone', locationForm.phone);
        const response = await fetch('http://localhost:8001/', { method: 'POST', body: formData });
        console.log(response.body)
        if (response.status === 400) {
            alert('That username is already taken! Please try again or try resetting your password!')
        } else if (response.status === 200) {
            alert('Sign Up Successful!')
        }
    }
    return(
        <>  
            <aside className='Component-icon-container'>
                <canvas className='Component-icon' height='100' width='100'></canvas>
            </aside>
            <article className='Component-content'>
                <div className='Component-general'>
                    <h3 className='Component-status'>Location TBD</h3>
                    <p className='Component-location'>Weather TBD</p>
                </div>
            </article>
            <section className='Component-details-section'>
                <div className='Component-detail'>
                    <h3 className='Component-title'>Precipitation</h3>
                    <p className='Component-value'>TBD</p>
                </div>
                <div className='Component-detail'>
                    <h3 className='Component-title'>Temperature</h3>
                    <p className='Component-value'>TBD</p>
                </div>
                <div className='Component-detail'>
                    <h3 className='Component-title'>Wind</h3>
                    <p className='Component-value'>TBD</p>
                </div>
            </section>
            <form method='get' className='Component-city-search-container'>
                <Input
                    inputName='city-search'
                    labelText='Enter location'
                    inputType='text'
                    inputPlaceholer='e.g. San Diego, CA'
                    handleChange = {handleChange}
                />
            </form>
            <Link to='/'>
                <Button 
                    text='Submit'
                    onClick={handleSubmit}
                />
            </Link>
        </>
    )
}

export default LocationForm