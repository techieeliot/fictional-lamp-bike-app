import React, { useState } from 'react'
import Input from './Input'

const Signup = (props) => {
    const [signUpForm, setSignUpForm] = useState({});

    const handleChange = e => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
            })
    }
    return(
        <article className="App-article">

            <h2>{props.sectionTitle}!</h2>
            <form method="post" id="App-signup-form">
                <Input 
                    inputName="username"
                    labelText="Username"
                    inputType="email"
                    inputPlaceholer="yourname@email.com"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
            </form> 
        </article>
    )
} 

export default Signup;