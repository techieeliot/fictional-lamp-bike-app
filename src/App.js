import React, { useState } from 'react';
import logo from './images/logo.svg';
import Header from './components/Header';
import Section from './components/Section';
import Landing from './components/Landing';
import './App.css';
import Footer from './components/Footer';


const App = () => {
  const {section, setSection} = useState('landing')
  
  const sectionRender = (section) => {
    if(section==='landing'){
      return <Landing />
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
        sectionRender={section}
      />
      <Footer 
        className="App-footer"
        slogan="A LEGENDARY APP."
      />

    </main>
  );
}

export default App;
