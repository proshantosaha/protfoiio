import React from 'react';
import ContactItem from '../../contactItem/ContactItem';
import Title from '../../title/Title'
import phone from '../../img/phone.png';
import email from '../../img/email.png'
import location from '../../img/location.png';


import './_contactPage.scss';

export default function ContactPage() {
    return (
        <div className=''>
            <div className='title'>
                <Title title ={'Contact me'} span={'Contact me'}/>
            </div>            

            <div className="ContactPage">
                <div className="map-sect">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28754.457163076033!2d89.2902152!3d25.7273545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639402113194!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
                </div>
                
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+880 1751040462'} text2={'+880 1751040462'} title={'Phone'}/>
                    <ContactItem icon={email} text1={'proshantoll71@gmail.com'} text2={'proshantoll71@gmail.com'} title={'Email'}/>
                    <ContactItem icon={location} text1={'Rangpur,Bangladesh'} text2={'Rangpur,Bangladesh'} title={'Address'}/>

                </div>  
            </div>
        </div>
        
    )
}
