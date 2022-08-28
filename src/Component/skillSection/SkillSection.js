import React from 'react'
import './skillsection.scss'
// import Title from '../title/Title'

export default function SkillSection({skill,progress}) {
    return (
        <div class="SkillSection">
            <div className="skill-container">
                <h5 className="skill-title">
                    {skill}
                </h5>
                <div className="skill-bar"> 
                    <p className="skill-text">{progress}</p>
                    <div className="skill-progress">
                        <div className="progress">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
