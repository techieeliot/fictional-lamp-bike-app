import React, { useState, useEffect} from 'react'
import Header from './Header'
import Button from './Button'
import Footer from './Footer'
import GoodDay from './GoodDay'
import LocationForm from './LocationForm'
import { Link } from 'react-router-dom';

const Home = () => {
    const [coords, setCoords] = useState('32.735317, -117.149048');
    const title='Welcome to Biker'
    const articleTitle="Let's ride"
    
    return(
        <>  
            <Header title={title} />
            <main className='App-main'>
                <h2>{`${articleTitle}!`}</h2>
                <LocationForm />
                <GoodDay />
                <div className='App-flexbox'>
                    <Link to='/signup'>
                        <Button text='Signup' />
                    </Link>
                    <Link to='/login'>
                        <Button text='Login' />
                    </Link>
                </div>
            </main> 
            <Footer slogan='A LEGENDARY APP.' />
        </>
    )
} 

export default Home;