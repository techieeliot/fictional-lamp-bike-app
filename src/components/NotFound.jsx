import React from 'react'

function NotFound() {
    const navStyle = {
        color: 'white', 
        textDecorationLine: 'none'
    }
    return(
        <main className='Component-main-not-found'> 
            <section className='Component-section-not-found'> 
                <span>404</span> 
                <p>The requested path could not be found</p> 
            </section> 
        </main>
    )
} 
export default NotFound;