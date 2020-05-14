import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Footer from './components/Footer'
import LocalForecast from './components/LocalForecast'
import Header from './components/Header'
// import Success from './components/Success'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Forecast from './components/LocalForecast'
import LocationForm from './components/LocationForm'

const App = function() {
 

    return (
      <Router>
        <Nav />
        <Switch> 
          <Route path='/' exact>
            <Home 
              title='Welcome to Biker'
              articleTitle="Would you like to check the forecast for your current location? Let's Ride"
            />
          </Route>
          <Route path='/localforecast'>
            <Header title='Your Local Forecast' />
            <LocalForecast 
              articleTitle="Today's Weather"
            />
          </Route>
          <Route path='/locationform'>
            <Header title='City Search' />
            <LocationForm 
              articleTitle="Find Your Weather by Searching"
            />
          </Route>
          <Route path='/signup'>
            <Signup 
              title='Sign up'
              articleTitle='Fill in your info'
            />
          </Route>
          <Route path='/login'>
            <Login 
              title='Login'
              articleTitle='Fill in your info'
            />
          </Route>
        </Switch>
        <Footer /> 
      </Router>
    )
}

export default App;
