import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Footer from './components/Footer'
import LocalForecast from './components/LocalForecast'
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
            <LocalForecast 
              title='Your Local Forecast'
              articleTitle="Today's Weather"
            />
          </Route>
          <Route path='/locationform'>
            <LocationForm 
              title='City Search'
              articleTitle="Find Your Weather by Searching"
            />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        <Footer /> 
      </Router>
    )
}

export default App;
