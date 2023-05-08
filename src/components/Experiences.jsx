import React, { useEffect } from 'react';

import ExperienceCard from './ExperienceCard';
import { ListOfExperience } from '../data/ListOfExperience';

const Experiences = () => {

    useEffect(() => {

        const handleExperienceScroll = () => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const experienceCards = document.querySelectorAll('.experience-card');
            experienceCards.forEach((card, index) => {
                const cardOffset = card.offsetTop;
                if (scrollTop + (windowHeight / 2) >= cardOffset && !card.classList.contains("fade-in")) {
                  card.classList.add("fade-in");
                }

            })
        };

        window.addEventListener('scroll', handleExperienceScroll);
        return () => {
          window.removeEventListener('scroll', handleExperienceScroll);
        };
    });

    return (
        <div id="experience" className={`tag bg-dark p-md-5 padding-for-mobile`}>
        <div className='p-lg-5'>
          <h1 className='text-bg-dark'><b>Experience -</b></h1>
          {ListOfExperience.map((experience, index) => (
            <ExperienceCard
              title={experience.title}
              role={experience.role}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              logo={experience.logo}
              key={index}
            />
          ))}
        </div>
      </div>
    )

}

export default Experiences;