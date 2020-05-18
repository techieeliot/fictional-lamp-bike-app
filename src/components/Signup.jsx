import React, { useState } from 'react'
import Header, { logo } from './Header'
import Input from './Input'
import Button from './Button'
import Footer from './Footer'
import { Link } from 'react-router-dom';

const Signup = (props) => {
    const title='Signup'
    const articleTitle='Fill in your details'
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
        console.log(response.body)
        if (response.status === 400) {
            alert('That username is already taken! Please try again or try resetting your password!')
        } else if (response.status === 200) {
            alert('Sign Up Successful!')
        }
    }

    // const checkPassword = () => {
    //    return signUpForm.passwordCheck===signUpForm.verifyPassword
    // }
    return(
        <>
            <Header 
                logo={logo} 
                title={title}
            />
            <main className='App-main'>
                <h2>{articleTitle}</h2>
                <form method='post' id='signup' className='App-form-article'>
                    <Input 
                        inputName='username'
                        labelText='Username'
                        inputType='email'
                        inputPlaceholer='e.g. i_heart_motorcyles@email.com'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                    <Input 
                        inputName='password'
                        labelText='Password'
                        inputType='password'
                        inputPlaceholer='Create a secure password'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                    <Input 
                        inputName='verify-password'
                        labelText='Verify Password'
                        inputType='password'
                        inputPlaceholer='Verify your password'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                    <Input 
                        inputName='first-name'
                        labelText='First name'
                        inputType='text'
                        inputPlaceholer='e.g. William'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                    <Input 
                        inputName='last-name'
                        labelText='Last name'
                        inputType='text'
                        inputPlaceholer='e.g. Harley'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                    <Input 
                        inputName='phone'
                        labelText='Phone number'
                        inputType='tel'
                        inputPlaceholer='e.g. 888-888-8888'
                        handleChange = {handleChange}
                        signUpForm = {signUpForm}
                        setSignUpForm = {setSignUpForm}
                    />
                </form>
                <Button onClick={handleSubmit} text='Submit'/>
                <article className='App-article'>
                    <p>Already have an account?</p>
                    <Link to='/login'>                 
                        <Button text='Login' />                  
                    </Link>
                </article>
                <Link to='/'>
                    <Button text='Back' /> 
                </Link>
            </main>
            <Footer 
                slogan='Legendary service at your finger tips'
            />
        </>
    )
} 

export default Signup;