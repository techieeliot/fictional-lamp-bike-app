import React from 'react'
import Button from './Button'

function Section(props) {
    const sectionTitle = "Let's ride"
    return(
        <section className="App-section">
            <article className="App-buttons">
                <h2>{sectionTitle}!</h2>
                <Button text="Sign Up" />
                <Button text="Login" />
            </article> 
            {/* <h2>{props.sectionTitle}</h2>
            {props.main} */}
        </section> 
    )
} 

export default Section;
