import React from 'react';
import { ImageCard } from '../Components/ImageCard';

function Theme() {
  return (
    <div className=' bg-[#005918]'>
      <div className="h-[50vh] w-full bg-leave bg-repeat"></div>

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
          className='absolute inset-0 m-auto z-10 w-[90%] max-w-[1200px]  sm:px-0'
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
      <div className="h-[50vh] w-full flex justify-center bg-leave bg-repeat pt-10">
        <div className="flex flex-wrap justify-center">
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
          <div className="size-20 bg-hotbar bg-cover"></div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
