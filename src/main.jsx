import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Hero from './Sections/Hero.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';
import About from './Sections/About.jsx';
import Prizepool from './Sections/Prizepool.jsx';
import Theme from './Sections/Theme.jsx';
import Timeline from './Sections/Timeline.jsx';

const App = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.querySelector('#background-video');
    if (video) {
      video.onloadeddata = () => {
        setIsVideoLoaded(true);
      };
    }
  }, []);

  return (
    <StrictMode>
      <Navbar />
      {!isVideoLoaded && (
        <div className="loader fixed inset-0 flex items-center justify-center bg-black z-50">
          <div class="tenor-gif-embed" data-postid="6240430838211283137" data-share-method="host" data-aspect-ratio="1.33155" data-width="100%"><a href="https://tenor.com/view/minecraft-loading-landscape-gif-6240430838211283137">Minecraft Loading GIF</a>from <a href="https://tenor.com/search/minecraft-gifs">Minecraft GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
      )}
      <div className="">
        <video
          id="background-video"
          src="background_og1 (1).mp4"
          autoPlay
          loop
          muted
          preload="auto"
          className={`fixed h-screen w-full object-cover -z-10 ${isVideoLoaded ? '' : 'hidden'
            }`}
        />
        <div className="">
          <div className="relative">
            <Hero />
            <div className="h-[30vh] w-full absolute bg-gradient-to-t from-[#005918] to-[#00000000] bottom-0 -z-10"></div>
          </div>
          <About />
          <div className="relative">
            <div className="w-full h-[60vh] absolute bg-gradient-to-b from-[#005918] to-[#00000000]"></div>
            <Theme />
            <Timeline />
            <Prizepool />
          </div>
        </div>
      </div>
      <Footer />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<App />);
