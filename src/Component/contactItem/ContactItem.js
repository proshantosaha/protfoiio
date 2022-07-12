import React from 'react'

import './_contactItem.scss'

export default function ContactItem({icon,title,text1, text2}) {
    let telShortcut = 'tel:';

    return (
        <div className='ContactItem'>
            <div className="contact">
                <img src={icon} alt=""/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p><a href={telShortcut + text1}>{text1}</a></p>
                    <p><a href={text2}>{text2}</a></p>
                </div>
            </div>
        </div>
    )
}
