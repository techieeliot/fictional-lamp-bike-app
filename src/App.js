import React, { useState } from 'react';
import logo from './images/logo.svg';
import Header from './components/Header.js';
import Section from './components/Section';
import HomeMain from './components/HomeMain';
import './App.css';
import Footer from './components/Footer';


function App() {
  const {main, setMain} = useState('home')
  
  const sectionRender = (main) => {
    if(main==='home'){
      return <HomeMain />
    }
  }
  return (
    <main className="App">
      <Header 
        className="App-header"
        logo={logo} 
        title="Welcome to the Biker App" 
      />
      <Section 
        // sectionTitle={sectionTitle}
        className="App-section"
        sectionRender={main}
      />
      <Footer 
        className="App-footer"
        slogan="A LEGENDARY APP."
      />

    </main>
  );
}

export default App;
