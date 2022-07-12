import React from 'react'
import Title from '../../title/Title'
import ImageSection from '../imageSection/imageSection';
import SkillSection from '../../skillSection/SkillSection';
import ServiceSection from'../../serviceSection/ServiceSection'
import  './_aboutpage.scss';
import design from '../../img/web-design.png';
import web from '../../img/web-development.png';
import development from '../../img/web-development (1).png'





export default function AboutPage() {
    return (
        <div className="AboutPage">

            <div className='about-me'>
                <Title title ={'About me '} span={'About me'}/>
            </div>
           
            <ImageSection/>

            <div className="skilsContainer">
                <div className='Skill-me'>
                    <Title title ={'My Skill'} span={'My Skill'}/>
                </div>
               


                <SkillSection skill={'HTML'} progress={'95%'}/>
                <SkillSection skill={'CSS'} progress={'90%'}/>
                <SkillSection skill={'Botstrap'} progress={'80%'}/>
                <SkillSection skill={'javascript'} progress={'70%'}/>
                <SkillSection skill={'React'} progress={'75%'}/>
            </div>
            <div className="Servisestitle">
                <Title title ={'Services'} span={'Services'}/>
            </div>
            
            <div className="ServisesContainer">
                <ServiceSection image={design} title={'Designer'} text={'I value simple content structure, clean design patterns, and thoughtful interactions.'}/>
                <ServiceSection image={web} title={'Front-end Developer'} text={'I like to code things from scratch, and enjoy bringing ideas to life in the browser'}/>
                <ServiceSection image={development} title={'Mobile-Friendly'} text={'A responsive design makes your websites accessible to all users regardless of their device'}/>
            </div>


        </div>
    )
}
