import React from 'react'

function Hero() {
  return (
    <div className='h-screen w-full relative flex items-center flex-col py-8 justify-center'>
        <video src='background_og1.mp4' autoPlay loop muted preload='auto' className='absolute top-0 left-0 h-full w-full object-cover -z-10' />
        <img src='S4DSlogo.png' className='size-52 max-sm:size-40' />
        <p className='text-white font-bold text-2xl max-sm:text-lg my-12'>PRESENTS</p>
        <img src='Logo.png' className='max-sm:h-40 h-80' />
    </div>
  )
}

export default Hero
