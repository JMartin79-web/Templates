import React from 'react'
import { useState } from 'react'

import IconArrow from '../Icons/IconArrow'
import ItemList from '../Cards/ItemList'
import IconStar from '../Icons/IconStar'


function BigNameList() {

    const [click, setClick] = useState(false)
    function onHandleArrowClick(){ setClick(!click) }

return (
<div className='big-name-list-container'>

    <div className='big-name-list'>

        <div className='title'>

            <div className='title-title'>
                <h4>Obras sociales con las que trabajamos</h4>
            </div>

            <div className='title-icon'>
                <div className={click? 'title-icon-div-clicked' : 'title-icon-div' } onClick={onHandleArrowClick} >
                    <IconArrow/>
                </div>
            </div>
        </div>

        <div className='content'>
            <div className={ click ? 'content-show' :'content-hidden' }>
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
                <ItemList icon={<IconStar/>} txt='Content' />
            </div>
        </div>

    </div>

</div>
  )
}

export default BigNameList