import React from 'react'


import CardSquare from '../Cards/CardSquare'
import CardIcon from '../Cards/CardIcon'


function About() {
return (
  <main className='about-container'>
  
    <section className='about'>
      <h3>About</h3>
    
      <div className='about-content'>
        <CardIcon title='General' img='#' />
        <CardIcon title='Ortodoncia' img='#'/>
        <CardIcon title='Ortopedia' img='#'/>
        <CardIcon title='Estética' img='#' />
        <CardIcon title='Endodoncia' img='#'/>


        <CardSquare
          txt='texto de ejemplo'  
        />

        <CardSquare
          txt='texto de ejemplo'  
        />

        <CardSquare
          txt='texto de ejemplo'  
        />
      
      </div>
    
    </section>

  </main>

)
}

export default About