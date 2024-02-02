import React from 'react'

function CardHorizontal(props) {
  return (
    <div className='card-horizontal'>

        <div className='card-horizontal-img'>
          {props.img}
        </div>

        <div className='card-horizontal-txt'>
            <h5 className='card-horizontal-txt-title'> {props.title} </h5>
            <p className='card-horizontal-txt-txt'> {props.txt} </p>
        </div>

    </div>
  )
}

export default CardHorizontal