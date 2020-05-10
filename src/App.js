import React, { useState } from 'react'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import './App.css';


const App = () => {
  const {route, setRoute} = useState('home')
  
  const sectionRender = (route) => {
    if(route==='home'){
      return <Home />
    }
  }
  return (
    <>
      <Home 
        title='Welcome to the Biker App'
        articleTitle="Let's ride"
      />
    </>
  );
}

export default App;
