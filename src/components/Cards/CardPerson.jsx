import React from 'react'

function CardPerson(props) {
  return (
    <div className='card-person'>

        <div className='card-person-img'>
           <img src={props.img} alt="props.title" /> 
        </div>
        <div className='card-person-gradient'></div>
        <div className='card-person-txt'>
            <h6> {props.title} </h6>
            <p> {props.txt} </p>
        </div>

    </div>
  )
}

export default CardPerson