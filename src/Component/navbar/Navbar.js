import React from 'react';
import Joy from '../img/ps333.jpg'
import { NavLink } from 'react-router-dom';
import './navBar.scss'

export default function Navbar() {

    // let navv = document.getElementsByClassName('Navbar');

    // const ourClick =() =>{
    //     console.log(navv);
    // }


    return (
        <div className="Navbar">
            <nav className="nav">
                <div className="profile">
                    <img src={Joy} alt=""/>
                </div> 
                
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink  to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blogs" exact activeClassName="active">
                            Blogs
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        Copyright &copy;2021  Web Coding Pro.All Rights Reserved
                    </p>
               </footer>
            </nav>
           
        </div>

      
        
    )
}
