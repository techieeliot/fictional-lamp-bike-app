import React from 'react'

const Input = (props) => {

    return(
        <div className="App-form-column">
            <label for={props.inputName}>{props.labelText}:</label>
            <input onChange={props.handleChange} type={props.inputType} name={props.inputName} id={props.inputName} placeholder={props.inputPlaceholer} required />
        </div>
    )
} 

export default Input;
