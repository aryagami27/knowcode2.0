import React from 'react';
import {
  InstagramLogo,
  LinkedinLogo,
  EnvelopeSimple,
  GoogleLogo,
} from '@phosphor-icons/react';
import { GoogleChromeLogo } from '@phosphor-icons/react/dist/ssr';

function Footer() {
  return (
    <footer className='bg-[#272727] text-gray-400 py-12 px-6 font-Minecraft'>
      <div className='max-w-6xl mx-auto flex sm:flex-row  flex-col justify-between gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>Quick Links</h2>
          <ul className='flex flex-col space-y-2 items-start '>
            <li>
              <a
                href='#'
                className='hover:text-white transition-colors duration-300'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#about'
                className='hover:text-white transition-colors duration-300'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='#timeline'
                className='hover:text-white transition-colors duration-300'
              >
                Timeline
              </a>
            </li>
            {/* <li>
              <a
                href='#'
                className='hover:text-white transition-colors duration-300'
              >
                Contact
              </a>
            </li> */}
          </ul>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>Follow Us</h2>
          <div className='flex flex-col space-y-2 items-start '>
            <a
              href='https://www.linkedin.com/in/s4ds-kjsit-77a944346/'
              target='_blank'
              className='hover:text-white transition-colors duration-300 flex gap-1 items-center justify-center'
            >
              <LinkedinLogo size={28} /> {''}Linkedin
            </a>
            <a
              href='https://s4ds.kjsieit.in'
              target='_blank'
              className='hover:text-white transition-colors duration-300 flex gap-1 items-center justify-center'
            >
              <GoogleChromeLogo size={28} />
              {''}S4DS KJSIT
            </a>
            <a
              href='https://www.instagram.com/kjsit.s4ds/'
              target='_blank'
              className='hover:text-white transition-colors duration-300 flex gap-1 items-center justify-center'
            >
              <InstagramLogo size={28} />
              {''}Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className='text-white text-lg font-semibold mb-4'>Contact Us</h2>

          <p>K J Somaiya Institute of Technology, </p>
          <p>Eastern Express Highway,</p>
          <p> Near Everard Nagar, Sion (East),</p>
          <p>Mumbai – 400 022</p>
          <p>Email: bhavormi.somaiya@somaiya.edu</p>
          <p>Phone: +91 75066 73337</p>
        </div>
      </div>
      <p className='text-center text-xs pt-8 font-sans'>
        © 2025 S4DS KnowCode - 2.0 All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
