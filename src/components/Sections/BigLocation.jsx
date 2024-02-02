import React from 'react'

function BigLocation(props) {
  return (
    <div className='big-location'>
        <iframe 
            src={props.iframe}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
  )
}

export default BigLocation