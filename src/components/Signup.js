import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const Signup = (props) => {
    const [signUpForm, setSignUpForm] = useState({});

    const handleChange = e => {
        setSignUpForm({
            ...signUpForm,
            [e.target.name]: e.target.value
            })
    }

    const handleSubmit = async (e) => {
        
        const formData = new FormData();
        formData.append('username', signUpForm.username);
        formData.append('password', signUpForm.password);
        formData.append('verifyPassword', signUpForm.verifyPassword);
        formData.append('firstName', signUpForm.firstName);
        formData.append('lastName', signUpForm.lastName);
        formData.append('phone', signUpForm.phone);
        const response = await fetch('http://localhost:8888/signup', { method: 'POST', body: formData });
        
        if (response.status === 400) {
            alert('That username is already taken! Please try again or try resetting your password!')
        } else if (response.status === 200) {
            alert('Sign Up Successful!')
            props.setRoute('login')
        }
    }

    const checkPassword = () => {
       return signUpForm.passwordCheck===signUpForm.verifyPassword
    }
    return(
        <>
            <h2>{props.sectionTitle}!</h2> {/* Signup! */}
            <form method="post" className="App-form">
                <Input 
                    inputName="username"
                    labelText="Username"
                    inputType="email"
                    inputPlaceholer="e.g. i_heart_motorcyles@email.com"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
                <Input 
                    inputName="password"
                    labelText="Password"
                    inputType="password"
                    inputPlaceholer="Create a secure password"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
                <Input 
                    inputName="verify-password"
                    labelText="Verify Password"
                    inputType="password"
                    inputPlaceholer="Verify your password"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
                <Input 
                    inputName="first-name"
                    labelText="First name"
                    inputType="text"
                    inputPlaceholer="e.g. William"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
                <Input 
                    inputName="last-name"
                    labelText="Last name"
                    inputType="text"
                    inputPlaceholer="e.g. Harley"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
                <Input 
                    inputName="phone"
                    labelText="Phone number"
                    inputType="tel"
                    inputPlaceholer="e.g. 888-888-8888"
                    handleChange = {handleChange}
                    signUpForm = {signUpForm}
                    setSignUpForm = {setSignUpForm}
                />
            </form> 
            <Button text='Submit'/>
        </>
    )
} 

export default Signup;