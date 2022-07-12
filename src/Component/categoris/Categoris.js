import React from 'react'


import {NavLink} from 'react-router-dom';

import './_categori.scss'

export default function Categories({filter,categories}) {
    return (
        <div className='buttons'>
          {
              categories.map((cat,i)=>{
                  return <button type="button" className='btn-port'onClick={()=>filter(cat)} key={i} >{cat}</button>
              })
          }
        </div>
    )
}
