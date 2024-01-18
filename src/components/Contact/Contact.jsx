import React from 'react'
import DivisorIntern from '../Divisor/DivisorIntern'
import SocialButton from '../Buttons/SocialButton'

import IconFacebook from '../Icons/IconFacebook'
import IconInstagram from '../Icons/IconInstagram'
function Contact() {



return (
<div className='contact-container' id='contacto'>

    <div className='contact'>

        <div className='contact-info'>
            <div>
                <h3>¡Nos encanta Villa Urquiza!</h3>
                <p>Estamos ubicados en Dr. Pedro Ignacio Rivera 4946, General Urquiza.</p>
                <p>También nos podés encontrar en redes</p>
                
                <SocialButton href='https://www.facebook.com/meencantamidentista1' txt='Facebook' img={<IconFacebook/>} />
                <SocialButton href='https://www.instagram.com/meencantamidentista/?hl=es-la' txt='Instagram' img={<IconInstagram/>} />
            </div>

            <DivisorIntern color='#6CC1C6' />

            <div>
                <h5>Solicitá un turno llamando al 4522-5265</h5>
                <p>Estamos disponibles Lunes a Viernes de 09:00 a 18:00</p>
            </div>

        </div>

        <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.30191327061!2d-58.49149491121653!3d-34.57122648606627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb65e3ca0bf75%3A0x38f5a15f8218cedb!2sDr.%20Pedro%20Ignacio%20Rivera%204946%2C%20C1431BVJ%20CABA!5e0!3m2!1ses-419!2sar!4v1704245068289!5m2!1ses-419!2sar" width="400" height="400" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </div>

</div>
)
}

export default Contact