import React from 'react'
import Input from './Input'
import Button from './Button'

const LocationForm = (props) => {
    const googleMaps = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}&libraries=places,geometry`
    // const searchBox = new google.maps.places.SearchBox(document.querySelector("#city-search"));
    // searchBox.addListener('places_changed', function() {});
    return(
        <>
            <form method='get' className='App-article'>
                <Input
                    inputName='city-search'
                    labelText='City Name'
                    inputType='text'
                    inputPlaceholer='e.g. San Diego'
                    // handleChange = {handleChange}
                    required=''
                />
                <Input
                    inputName='state-search'
                    labelText='State/Province'
                    inputType='text'
                    inputPlaceholer='e.g. CA'
                    // handleChange = {handleChange}
                    required=''
                />
                <Input
                    inputName='latitude'
                    labelText='Latitude'
                    inputType='text'
                    inputPlaceholer='e.g. 57.9289845'
                    // handleChange = {handleChange}
                    required=''
                    />
                <Input
                    inputName='longitude'
                    labelText='Longitude'
                    inputType='text'
                    inputPlaceholer='e.g. -82.884732'
                    // handleChange = {handleChange}
                    required=''
                />
            </form>
            <Button 
                text='Submit'
                // onClick={handleSubmit}
            />
            <script async defer src={googleMaps} type="text/javascript"></script>
        </>
    )
}

export default LocationForm