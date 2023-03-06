import './App.css';
import './css/Landing.css';
import './css/Experience.css';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import { ListOfExperience } from './data/ListOfExperience';

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <About />
      <div id="experience" className='bg-dark p-md-5 padding-for-mobile'>
        <div className='p-lg-5'>
          <h1 className='text-bg-dark'><b>Experience -</b></h1>
          {ListOfExperience.map(experience => (
            <Experience
              title={experience.title}
              role={experience.role}
              location={experience.location}
              startDate={experience.startDate}
              endDate={experience.endDate}
              description={experience.description}
              logo={experience.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
