import React from 'react';
import { ImageCard } from '../Components/ImageCard';

function Theme() {
  return (
    <div className=' bg-[#005918]'>
      <ImageCard />

      <div className='relative'>
        <img src='Wood.png' alt='wood' className='w-full z-0' />

        <img
          src='Steve.png'
          alt='Steve'
          className='absolute z-10 w-auto h-[100%]'
          style={{
            top: '-20%',
            left: '0%',
            transform: 'translateX(0%)',
          }}
        />

        <img
          src='Theme.png'
          alt='Theme'
          className='absolute inset-0 m-auto z-10 w-[90%]  sm:px-0'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <img
          src='Alex.png'
          alt='Alex'
          className='absolute z-10 w-auto h-[100%]'
          style={{
            bottom: '-60%',
            right: '0%',
            transform: 'translateX(0%)',
          }}
        />
      </div>

      <ImageCard />
    </div>
  );
}

export default Theme;
