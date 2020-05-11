import React, { useState } from 'react'

const Input = (
    {inputName, 
    labelText, 
    handleChange,
    inputType,
    inputPlaceholer,
    }
) => {

    const [required, setRequired] = useState('required')

    return(
        <div className='App-form-column'>
            <label htmlFor={inputName}>{`${labelText}:`}</label>
            <input 
                onChange={handleChange} 
                type={inputType} 
                name={inputName} 
                id={inputName} 
                placeholder={inputPlaceholer} 
                {...required} 
            />
        </div>
    )
} 

export default Input;
