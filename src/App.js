import React, { useState, useEffect } from 'react';

import './App.css';
import './css/Animations.css';
import './css/Landing.css';
import './css/Skills.css';
import './css/About.css';
import './css/Skills.css';
import './css/Experience.css';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import Experiences from './components/Experiences';
import Skills from './components/Skills';

function App() {

  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const aboutOffset = document.getElementById('about').offsetTop;
      const skillsOffset = document.getElementById('skills').offsetTop;
      const experienceOffset = document.getElementById('experience').offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollTop + windowHeight >= aboutOffset && !isAboutVisible) {
        setIsAboutVisible(true);
      }
      if (scrollTop + windowHeight >= skillsOffset && !isSkillsVisible) {
        setIsSkillsVisible(true);
      }
      if (scrollTop + windowHeight >= experienceOffset && !isExperienceVisible) {
        setIsExperienceVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isAboutVisible, isSkillsVisible, isExperienceVisible]);

  return (
    <div>
      <Navbar />
      <Landing />
      <div className={`${isAboutVisible ? "fade-in" : ""}`}>
        <About />
      </div>
      <div className={`${isSkillsVisible ? "fade-in" : ""}`}>
        <Skills />
      </div>
      <div className={`${isExperienceVisible ? "fade-in" : ""}`}>
        <Experiences />
      </div>
    </div>
  );
}

export default App;
