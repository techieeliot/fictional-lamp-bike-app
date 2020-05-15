/*global google*/ 
import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import PlacesAutocomplete, { 
    geocodeByAddress, 
    getLatLng 
} from 'react-places-autocomplete'

const LocationForm = (props) => {
    const [address, setAddress] = useState('')
    const [position, setPosition] = useState({lat: null, lng: null})
    const [ weatherData, setWeatherData ] = useState([])
    const [GOOGLE_API_KEY] = useState('AIzaSyChibLEhSXx0b-odGYQtHKOLkb6ZVpJXi8')
    const handleSelect = async (value) => {
        const results = geocodeByAddress(value)
        const coords = getLatLng(results?.[0].geometry.location)
        setAddress(value)
        setPosition(coords)
    }

    


    return(
        <>
            {/* Google API Component to... */}
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}
            >
                {/* Below is the render prop function */}
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div className='App-form-column Component-city-search-container'>
                        <label htmlFor='city-search'>Enter a location:</label>
                        <input 
                            {...getInputProps({
                                type:'text',
                                name:'city-search',
                                id:'city-search',
                                placeholder:'e.g. San Diego, CA',
                                required:'required'
                            })}
                        />
                        <div className='Component-city-search-suggestion'>
                            {(loading) ? <div className='Component-city-search-is-loading'>loading...</div> : null}
                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? '#ec6e33' : '#fff',
                                    color: suggestion.active ? '#fff' : 'inherit',
                                }
                                return (
                                    <div {...getSuggestionItemProps(suggestion, {style})}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete> 
            <aside className='Component-icon-container'>
                <h2>{props.articleTitle}</h2>
                <canvas className='Component-icon' height='100' width='100'></canvas>
            </aside>
            <article className='Component-content'>
                <div className='Component-general'>
                    <h3 className='Component-status'>Location TBD</h3>
                    <p className='Component-location'>Weather TBD</p>
                </div>
            </article>
            <section className='Component-details-section App-flexbox'>
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
        </>
    )
}

export default LocationForm