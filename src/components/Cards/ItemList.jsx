import React from 'react'

function ItemList(props) {
  return (
    <div className='item-list-container'>
    
        <div className='item-list-dot'>
            {props.icon}
        </div>

        <div className='item-list-txt'>
            <p>{props.txt}</p>
        </div>
    
    </div>
  )
}

export default ItemList