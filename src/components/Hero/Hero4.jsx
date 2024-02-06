import React from 'react'
import SecondaryButton from '../Buttons/SecondaryButton'
import PrimaryButton from '../Buttons/PrimaryButton'
import hero_img from '../../assets/img/hero/ilus_hero_san_isidro.svg'
import { HashLink } from 'react-router-hash-link'

function Hero4(props) {
return (

<main className='hero4-container' id='inicio'>

<div className='hero4'>

    <section className='hero4-txt'>
        <h1>Cuidamos tu sonrisa</h1>
        <h1>para que disfrutes cada momento</h1>

        <h3>Cuidamos tu sonrisa</h3>
        <h3>para que disfrutes cada momento</h3>

        <div className='hero4-txt-buttons'>
            <HashLink smooth to={'/#contacto'} className='primary-button'>Contactanos</HashLink>
            <HashLink smooth to={'/#nosotros'} className='secondary-button'>Saber más</HashLink>
        </div>
    
    </section>

    <section className='hero4-img'>
        <img src={hero_img} alt="" />
    </section>

</div>

</main>
)
}

export default Hero4