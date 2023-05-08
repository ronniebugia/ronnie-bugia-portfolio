import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const MobileNav = () => {

    return (
        <nav className="nav-container navbar navbar-expand-lg navbar-dark text-bg-dark nav-mobile">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#about">Menu</a>
                </li>
            </ul>
        </nav>
    )

}

export default MobileNav;