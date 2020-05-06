import React from 'react'
import Button from './Button'

function Section(props) {
    const sectionTitle = "Let's ride"
    return(
        <section className="App-section">
            <article className="App-article">
                <h2>{sectionTitle}!</h2>
                <div className="App-flexbox">
                    <Button text="Sign Up" />
                    <Button text="Login" />
                </div>
            </article> 
            {/* <h2>{props.sectionTitle}</h2>
            {props.main} */}
        </section> 
    )
} 

export default Section;
