import React, { useState } from 'react'
import Header from './Header'
import Button from './Button';
import Input from './Input'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Login = (props) => {
    const title='Login'
    const articleTitle='Welcome back'
    const [loginForm, setLoginForm] = useState({});
    const [validPassword, setValidPassword] = useState(false);

    const handleChange = e => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
            })
      }

    // useEffect( () => {
    //     gpsFunction()
    // }, [])

    // const gpsFunction = async () => {
    //     if (navigator.geolocation) {
    //         await navigator.geolocation.getCurrentPosition((position) => {
    //             setLoginForm({
    //                 ...loginForm,
    //                 gps: `${position.coords.latitude}, ${position.coords.longitude}`
    //             })
    //         });
    //     }
    // }
        
    const handleSubmit = async () => {
        
        const formData = new FormData();
        formData.append('username', loginForm.username);
        formData.append('password', loginForm.password);
        formData.append('gps', loginForm.gps);
        console.log(loginForm);
        
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            body: formData
        });
        const body = await response.json();
        if (response.status === 401) {
            setValidPassword(true);
        } else if (response.status === 200) {
    
            props.loginSuccess(body.username, body.selfiePath, loginForm.username)

        }
        console.log(body);
    }
    return(
        <>
            <Header title={title} />  {/* Login! */}

            <main className='App-main'>
                <h2>{articleTitle}</h2>
                <form method='post' className='App-form-column'>
                    <Input 
                        inputName='username'
                        labelText='Username'
                        inputType='email'
                        inputPlaceholer='yourname@email.com'
                        handleChange = {handleChange}
                        signUpForm = {loginForm}
                        setSignUpForm = {setLoginForm}
                        required='required'
                        />
                    <Input 
                        inputName='password'
                        labelText='Password'
                        inputType='password'
                        inputPlaceholer='Create your password'
                        handleChange = {handleChange}
                        signUpForm = {loginForm}
                        setSignUpForm = {setLoginForm}
                        required='required'
                        />
                </form>
                <Link>
                    <Button 
                        onClick={handleSubmit}
                        text='Submit'
                    />
                </Link>
                <h2>{validPassword && 'Incorrect Password'}</h2>
                <article className='App-article'>
                    <p>Forgot your password?</p>
                    <Link to='/reset'>
                        <Button
                            text='Reset Password'
                        />                  
                    </Link>
                    <p>Don't have an account?</p>
                    <Link to='/signup'>
                        <Button
                            text='Signup'
                        />
                    </Link>
                    <br /> 
                    <Link to='/'>
                        <Button
                            text='Back'
                        />                  
                    </Link>                 
                </article>
            </main>
            <Footer 
                slogan="Let's ride!"
            />
        </>
    ) 
}

export default Login