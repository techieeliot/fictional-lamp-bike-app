import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStream
} from '@fortawesome/free-solid-svg-icons'
import preferencesWoman from '../images/preferences.svg'


function Criteria(props) {
    return(
        <>
            {/* WOMAN GREEN CHECKMARK ILLUSTRATION WITH HEADING */}
            <section className='Component-header'>
                <img 
                    src={preferencesWoman} 
                    className='App-drawing-medium' 
                    alt='A woman reaching up with right hand to touch a green checkmark and select a preference'
                />
                <h2>{props.articleTitle}</h2>
                <FontAwesomeIcon icon={faStream} className='Component-good-day-index-photo'/>
            </section>
          
        </>
    )
} 

export default Criteria;