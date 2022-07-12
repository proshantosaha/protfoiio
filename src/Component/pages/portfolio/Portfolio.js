import React from 'react';
import Categoris from '../../categoris/Categoris';
import MenuItem from '../../menu/MenuItem';
import Title from '../../title/Title';
import portfolios from '../../protfolioitem/ProtfolioItem';
import { useState } from 'react';

import './_portfolio.scss'

// 4.46 min spred function


const allCategories = ["All", ...new Set(portfolios.map(item => item.category))];




export default function PortfolioPage() {
    const [categories, setCategoris] = useState(allCategories);
    const [menuItem, setMenuItem] = useState(portfolios);


    const filter =(category) =>{

        if(category==="All"){
            setMenuItem(portfolios)
            return;
        }
        const filterdDate = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItem(filterdDate)
    }


    
    return (
        <div className='ProtfolioPage'>
            <div className='title'>
            <Title title ={'Protfolios'} span={'Protfolios'}/>
           </div>
           <div className='Protfolios-data'>
                <Categoris filter={filter} categories={categories}/>
                <MenuItem menuItem={menuItem}/>

           </div>
        </div>
    )
}
