import React from 'react'
import CardTestimonial from '../Cards/CardTestimonial'


import user from './../../assets/img/testimonials/user.jpg'
import adli from './../../assets/img/testimonials/adli.jpg'
import romina from './../../assets/img/testimonials/romina.jpg'



function TestimonialSection() {
return (
<div className='testimonial-section-container'>

    <div className='testimonial-section'>
        <h3>Lo que opinan nuestros clientes</h3>
        <div className='testimonial-section-cards'>
        	<CardTestimonial
                img={adli}
                title='Aldi Capellupo'
                txt='"Excelentes profesionales! Cordiales, con un consultorio precioso y por sobre todo, la mejor atención y trato!"'
            />

            <CardTestimonial
                img={romina}
                title='Romina Belluscio'
                txt='"Los contacte por la cercanía a mi domicilio. Muy buen profesional el Doctor Eduardo y como persona preocupándose por mí salud despues de ser atendida. Muchos saludos!"'
            />
            
        </div>
    </div>

</div>
)
}

export default TestimonialSection