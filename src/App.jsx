import React from 'react'
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
import LocationForm from './components/LocationForm'

const App = function() {
  
  return (
    <Router>
      <Nav />
      <Switch> 
        <Route path='/' exact>
          <Home 
            title='Welcome to Biker'
            articleTitle="Find your location to know if it's a good day for a ride."
          />
        </Route>
        <Route path='/localforecast'>
          <Header title='Your Local Forecast' />
          <LocalForecast 
            articleTitle="Today's Good Day Index"
          />
        </Route>
        <Route path='/locationform'>
          <Header title='City Search' />
          <LocationForm 
            articleTitle="Find Your Weather Forecast by Searching"
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
