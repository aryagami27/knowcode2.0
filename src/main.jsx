import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Sections/Hero.jsx'
import Navbar from './Components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <video src='background_og1.mp4' autoPlay loop muted preload='auto' className='relative h-screen w-full object-cover -z-10'>
      <div className="absolute z-10">
        <Navbar/>
        <Hero/>
      </div>
    </video>
  </StrictMode>,
)
