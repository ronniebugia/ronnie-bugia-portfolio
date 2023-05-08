import React, { useState } from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

import { GitHubLink, ResumeLink, LinkedInLink } from '../data/Links';

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => setShowNavbar(!showNavbar);

    return (
        <nav className="nav-container navbar navbar-expand-lg navbar-dark text-bg-dark">

            <button class="navbar-toggler" type="button" onClick={toggleNavbar}>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showNavbar ? 'show' : ''}`}>
                <ul className="navbar-nav mr-auto fade-in">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href={ResumeLink}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href={LinkedInLink}><BsLinkedin /></a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href={GitHubLink}><BsGithub /></a>
                    </li>
                </ul>
            </div>
        </nav>
    )

}

export default Navbar;