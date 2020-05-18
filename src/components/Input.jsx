import React from 'react'

const Input = (
    {inputName, 
    labelText, 
    handleChange,
    inputType,
    inputPlaceholer,
    required
    }
) => {

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
