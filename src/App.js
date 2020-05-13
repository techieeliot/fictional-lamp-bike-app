import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Footer from './components/Footer'
// import Success from './components/Success'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import axios from 'axios';
import './App.css';

const App = function() {
 

    return (
      <Router>
        <Nav />
        <Switch> 
          <Route path='/' exact>
            <Home 
              title='Welcome to Biker'
              articleTitle="Let's ride"
            />
          </Route>
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
        <Footer slogan='A LEGENDARY APP.' />
      </Router>
    )
}

export default App;
