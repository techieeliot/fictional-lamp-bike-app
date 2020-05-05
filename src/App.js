import React, { useState } from 'react';
import logo from './logo.png';
import Header from './Header';
import Section from './Section';
import HomeMain from './HomeMain';
import './App.css';


function App() {
  const {main, setMain} = useState('home')
  
  const sectionRender = (main) => {
    if(main==='home'){
      return <HomeMain />
    }
  }
  return (
    <div className="App">
      <Header 
        logo={logo} 
        title="Welcome to the Biker App" 
      />
      <Section 
        // sectionTitle={sectionTitle}
        sectionRender={main}
      />
    </div>
  );
}

export default App;
