import React from 'react';
import './_home.scss';
import FacebookIcon from '@material-ui/icons/Facebook'
import GithubIcon from '@material-ui/icons/GitHub'
import YoutubeIcon from '@material-ui/icons/YouTube'


export default function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi,I am
                     <span> Proshanto shaha</span>
                </h1>
                <p className="h-sub-text"> 
                    a freelance Front-end Developer with 5 years commercial experience creating successful websites.
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/" className="icon i-facebook">
                        <FacebookIcon/>
                    </a>
                    <a href="https://github.com/" className="icon i-github">
                        <GithubIcon/>
                    </a>
                    <a href="https://www.youtube.com/" className="icon i-youtube">
                        <YoutubeIcon/>
                    </a>
                </div>
            </header>
        </div>
    )
}
