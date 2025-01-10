import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Sections/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Hero/>
    <Footer/>
  </StrictMode>
);
