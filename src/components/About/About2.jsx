import React from 'react'


import CardHorizontal from '../Cards/CardHorizontal'



function About2() {
return (
<div className='about-2-container'>

    <div className='about-2'>

        <div className='about-2-img'>
            <img src='#' alt="foto" />
        </div>

        <div className='about-2-txt'>
            <h3>About 2</h3>
            <br /> <br />
            <div>
                <CardHorizontal img='#' txt='Card Horizontal' alt='card horizontal' />
                <CardHorizontal img='#' txt='Card Horizontal' alt='card horizontal' />
            </div>
        </div>

    </div>

</div>
)
}

export default About2