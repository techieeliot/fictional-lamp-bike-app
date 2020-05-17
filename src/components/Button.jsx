import React from 'react'

function Button({text, handleSubmit}) {
    return(
        <button className='App-button' onClick={handleSubmit}>
          {text}
        </button> 
    )
} 

export default Button;
