import React from 'react'
import Landing from './Landing'
import Signup from './Signup'


const Section = (props) => {
    let sectionTitle = "Let's ride"
    return(
        <section className="App-section">
            <Landing sectionTitle = {sectionTitle}/>
            <Signup sectionTitle = {sectionTitle} />
        </section> 
    )
} 

export default Section;
