import React from 'react'
import Card from './Card'

function About() {
return (
  <main className='about-container'>
  
    <section className='about'>
      <h3>About</h3>
    
      <div className='about-content'>
      
        <Card
          title="Card 1"
          txt='texto de ejemplo'  
        />

        <Card
          title="Card 2"
          txt='texto de ejemplo'  
        />

        <Card
          title="Card 3"
          txt='texto de ejemplo'  
        />
      
      </div>
    
    </section>

  </main>

)
}

export default About