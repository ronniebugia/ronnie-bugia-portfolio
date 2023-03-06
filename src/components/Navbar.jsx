import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Navbar = () => {

    return (
        <nav class="nav-container navbar navbar-expand-lg navbar-dark text-bg-dark">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#experience">Experience</a>
                </li>
                <li class="nav-item">
                    <a className='nav-link' href='https://drive.google.com/file/d/1hpkvZj5JkX4hHMMgssMVyCtUL7njI5h_/view?usp=sharing'>Resume</a>
                </li>
                <li class="nav-item">
                    <a className='nav-link' href='https://www.linkedin.com/in/ronnie-bugia/'><BsLinkedin /></a>
                </li>
                <li class="nav-item">
                    <a className='nav-link' href='https://github.com/ronniebugia'><BsGithub /></a>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;