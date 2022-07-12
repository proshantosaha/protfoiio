import React from 'react';
import './App.scss';
import Navbar from './navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import AboutPage from './pages/aboutpage/AboutPage';
import Portfolio from './pages/portfolio/Portfolio';
import  ContactPage from './pages/contactPage/ContactPage';
import BlogPage from './pages/blogsPage/BlogPage';
import {Switch,Route} from 'react-router-dom';
import {useState,useEffect,} from 'react'
import Loder from './loder/Loder';



// import {switch} from "react-router-dom"

export default function App() {
  
    const [navToggle,setNavToggle]= useState(false);

   

    const navClick =() =>{
        console.log("clicked");
        setNavToggle(!navToggle)
    }
    return (
        <div className="App">
                    <Loder/>
                <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}` }>
                    <Navbar/>
                </div>

                <div className="nav-btn" onClick={navClick}>
                    <div className="lines-1"></div>
                    <div className="lines-2"></div>
                    <div className="lines-3"></div>
                </div>
        
                <div className="main-content">
                    <div className="content">
                        <Switch>
                            <Route path="/" exact>
                                <HomePage/>
                            </Route>
                            <Route path="/about" exact>
                                <AboutPage/>
                            </Route>
                            <Route path="/portfolio" exact>
                                <Portfolio/>
                            </Route>
                            <Route path="/blogs" exact>
                                <BlogPage/>
                            </Route>
                            <Route path="/contact" exact>
                                <ContactPage/>
                            </Route>
                        
                        </Switch>
                    </div>
                </div>
        </div>
    )
}

// window.addEventListener('load', function(){
//     alert('sfs')
// })


window.addEventListener('load', function(){
    let loaderDiv = document.getElementById('loader')
    loaderDiv.classList.add("loader-none")
});


 


 