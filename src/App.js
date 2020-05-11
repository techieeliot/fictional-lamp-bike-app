import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Success from './components/Success'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';

const App = function() {
  const [route, _setRoute] = useState('home');
    const [user, setUser] = useState(null)
    const [magic, setMagic] = useState('')
    //const [title, setTitle] = useState('');
    const setRoute = (route) => {
        //sideeffects
        _setRoute(route)
       window.history.pushState(null, route, route)
    }

    const resetRoute = (route) => {
        _setRoute(route)
        window.history.replaceState(null,'', `http://localhost:8001/${route}`)
    }

    const onSuccessfulLogin = (firstName, selfiePath, username) => {
        setUser([
            ['firstName', firstName],
            ['selfiePath', selfiePath],
            ['username', username]
        ]);
        setRoute('success')
    }

    const onLogout = () => {
        setUser({ user: null });
        setRoute('main')
    }
    // useEffect(() => {
    //     Route(route, setRoute, resetRoute, window.location.href, setMagic)
    // }, [])
    // /* const handleTitleChange = e => {
    //     setTitle({ title: e.target.value })
    // } */

    // const renderSwitch = (route) => {
    //     let pageRoute;
    //     switch (route) {
    //         case 'home':
    //         case '':
    //             pageRoute = <Home 
    //                 onLogin={setRoute}
    //                 title="Welcome to the Biker App" 
    //                 articleTitle="Let's ride"
    //               />
    //             break;
    //             case 'signup':
    //               pageRoute = <Signup 
    //                 onSignup={setRoute}
    //                 setRoute={setRoute}
    //                 title="Sign Up" 
    //               />
    //               break;
    //               case 'login':
    //                 pageRoute = <Login 
    //                   loginSuccess={onSuccessfulLogin}
    //                   setRoute={setRoute}
    //                   title="Login" 
    //                 />
    //                 break;
    //               case 'success':
    //                   pageRoute = <Success 
    //                     user={user}
    //                     onLogout={onLogout}
    //                     setRoute={setRoute}
    //                     title="Login Successful" 
    //                   />
    //                   break;
    //         default:
    //             pageRoute = <div> 404 </div>
    //             break;
    //     }
    //     return pageRoute;
    // }
    
    return (
      <Router>
        <Nav />
        <Switch>
          <Route 
            path={'/'} exact
            component={ Home }
          />
          <Route 
            path={'/signup'} 
            component={ Signup }
          />
          <Route 
            path={'/login'} 
            component={ Login }
          />
        </Switch>
        
      </Router>
    )
}

export default App;
