import React from 'react'
import './serviceSection.scss'

function ServiceSection({image, title, text}) {
    return (
        <div className="ServiceSection">
            <div className="service">
                <div className="service-content">
                    <img className='s-image'  src={image} alt=""/>
                    <h5 className="s-title">{title}</h5>
                    <p className="s-text">{text}</p>
                    
                 </div>
              

            </div>
        </div>
    )
}

export default ServiceSection