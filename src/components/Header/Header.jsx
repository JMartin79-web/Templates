import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


// img


function Header() {

  const [toggle, setToggle] = useState(false)
  function handleToggle () { setToggle(!toggle) }

return (
<>
  <div className="header-container">

    <div className='header'> 

      <div className='header-logo'>
        <h6>LOGO</h6>
      </div>
      
      <div className='header-links'>
        <HashLink to='/'/>
      </div>
    
      <div className='header-hamburger'>
        <div className='hamburger-container' onClick={handleToggle}>
          <div className={toggle? 'hamburger-btn-clicked' :'hamburger-btn'} >
              <span></span>
              <span></span>
              <span></span>
          </div>

        </div>
      </div>

    </div>
      

  </div>


  <div className={toggle ? 'dashboard-container' : 'dashboard-container-close'}>
   
    <div className='dashboard'>



      <div className='dashboard-content'>
       
      </div>

    </div>
  
    
  </div>

</>
);
}

export default Header