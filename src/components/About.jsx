import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';

const About = () => {

    return (
        <div id="about" className='p-md-5 padding-for-mobile'>
            <div className='p-lg-5'>
                <h1><b>Welcome to my Desk! -</b></h1>
                <p>
                As a recent graduate of the University of British Columbia, where I earned a B.A in Mathematics with a Minor in Computer Science, 
                I have gained extensive experience in full-stack web development, data analytics, React, Node, Python, Java and JavaScript. I am excited to take on 
                new challenges and contribute to meaningful projects. Click on the links below to view some of my projects on Github and details on my previous
                work experience on LinkedIn and my Resume.
                </p>
            </div>
            <div className='row font-open-sans about-link-wrapper'>
                <div className='col-md-4 text-center about-link-div'>
                    <a className='about-link' href='https://www.linkedin.com/in/ronnie-bugia/'><BsLinkedin size={70} /></a>
                </div>
                <div className='col-md-4 text-center about-link-div'>
                    <a className='about-link' href='https://github.com/ronniebugia'><BsGithub size={70} /></a>
                </div>
                <div className='col-md-4 text-center about-link-div'>
                    <a className='about-link' href='https://drive.google.com/file/d/1hpkvZj5JkX4hHMMgssMVyCtUL7njI5h_/view?usp=sharing'>
                        <IoMdDocument size={70} />
                    </a>
                </div>
            </div>
        </div>
    )

}

export default About;