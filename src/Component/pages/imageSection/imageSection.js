import React from 'react'
import about from '../../img/ps333.jpg'
import './imageSection.scss'


export default function ImageSection() {
    return (
        <div className="imageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am <span> Proshanto shaha</span></h4>
                <p className="about-para">I'm website developer</p>
                
                <div className="about-details">
                    <div className="details-info left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>

                    <div className="info right-section">
                        <p>: ps</p>
                        <p>: 20</p>
                        <p>: Bangladeshi</p>
                        <p>: Bengali,English</p>
                        <p>: Rangpur,Bangladesh</p>
                        <p>: Front end web developer</p>
                    </div>
                </div>
                <button className="btn"> Download</button>
            </div>
            
        </div>
    )
}
