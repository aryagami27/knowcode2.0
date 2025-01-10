import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Sections/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import About from './Sections/About.jsx';
import Prizepool from './Sections/Prizepool.jsx';
import Theme from './Sections/Theme.jsx';
import Timeline from './Sections/Timeline.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <div className="">
      <video src='background_og1 (1).mp4' autoPlay loop muted preload='auto' className='fixed h-screen w-full object-cover -z-10'/>
      <div className="">
        <div className="relative">
          <Hero/>
          <div className="h-[30vh] w-full absolute bg-gradient-to-t from-[#005918] to-[#00000000] bottom-0 -z-10"></div>
        </div>
        <About/>
        <div className="relative">
        <div className="w-full h-[60vh] absolute bg-gradient-to-b from-[#005918] to-[#00000000]"></div>
        <Theme/>
        <Timeline/>
        <Prizepool/>
        </div>
      </div>
    </div>
    <Footer/>
  </StrictMode>
);
