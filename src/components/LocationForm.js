import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

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
            <form method='get' className='App-article'>
                <Input
                    inputName='city-search'
                    labelText='City Name'
                    inputType='text'
                    inputPlaceholer='e.g. San Diego'
                    handleChange = {handleChange}
                />
                <Input
                    inputName='state-search'
                    labelText='State Code'
                    inputType='text'
                    inputPlaceholer='e.g. CA'
                    handleChange = {handleChange}
                />
                <Input
                    inputName='country-search'
                    labelText='Country Code'
                    inputType='text'
                    inputPlaceholer='e.g. US'
                    handleChange = {handleChange}
                />
                <Input
                    inputName='latitude'
                    labelText='Latitude'
                    inputType='text'
                    inputPlaceholer='e.g. 32.735317'
                    handleChange = {handleChange}
                />
                <Input
                    inputName='longitude'
                    labelText='Longitude'
                    inputType='text'
                    inputPlaceholer='e.g. -117.149048'
                    handleChange = {handleChange}
                />
            </form>
            <Button 
                text='Submit'
                onClick={handleSubmit}
            />
        </>
    )
}

export default LocationForm