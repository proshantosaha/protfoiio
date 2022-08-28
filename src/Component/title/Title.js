import React from 'react'
import './-title.scss'

export default function Title({title,span}) {
    return (
        <div className="Title">
            <h3 className="">
                {title}
                <span>{span}</span>
            </h3>


        </div>
    )
}
