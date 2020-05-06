import React from 'react'
import Button from './Button'

const Landing = (props) => {
    const signupText = "Sign Up"
    const loginText = "Login"
    return(
        <article className="App-article">
            <h2>{props.sectionTitle}!</h2>
            <div className="App-flexbox">
                <Button text={signupText} />
                <Button text={loginText} />
            </div>
        </article> 
    )
} 

export default Landing;