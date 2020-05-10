import React from 'react'
import Input from './Input'
import Button from './Button'

const LocationForm = (props) => {

    return(
        <>
            <form method="get">
                <Input
                    inputName="latitude"
                    labelText="Latitude"
                    inputType="text"
                    inputPlaceholer="e.g. 57.9289845"
                    // handleChange = {handleChange}
                />
                <Input
                    inputName="longitude"
                    labelText="Longitude"
                    inputType="text"
                    inputPlaceholer="e.g. -82.884732"
                    // handleChange = {handleChange}
                />
            </form>
            <Button 
                // onClick={handleSubmit}
                text="Submit"
            />
        </>
    )
}

export default LocationForm