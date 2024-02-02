import React from 'react'

function CardIcon(props) { 
return (
    <div className='card-icon'>

        <div className='card-icon-img'>
            {props.img}
        </div>
        
        <div className='card-icon-txt'>
            <h6> {props.title} </h6>
            <p> {props.txt} </p>
        </div>

    </div>
)
}

export default CardIcon