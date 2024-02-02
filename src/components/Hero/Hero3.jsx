import React from 'react'
import { HashLink } from 'react-router-hash-link'


//import heroImg from './../../assets/img/hero/hero_bg.jpg'

function Hero3() {
return (
    
<main className='hero3-container'  id='inicio'>
        
    <div className='hero-container'>

        <div className='hero'>
            <section className='hero-txt'>
                <h1>Title h1</h1>
                <h1>Second title h1</h1>
            
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, ea, unde cupiditate asperiores</p>
                        
                <div className='hero-txt-buttons'>
                    <HashLink smooth to={'/#nosotros'} className='secondary-button'>Saber más</HashLink>
                    <HashLink smooth to={'/#contacto'} className='primary-button'>Solicitar turno</HashLink>
                </div>
                    
            </section>
        </div>

    </div>
        
    <div className='hero-bg'>
       <img src='#' alt="hero img" />
   </div>

</main>
)
}

export default Hero3