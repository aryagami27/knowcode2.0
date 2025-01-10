import React from 'react'

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen py-8 justify-center">
        <img src='S4DSlogo.png' className='mt-52 size-52 max-sm:size-40' />
        <p className='text-white font-bold text-2xl max-sm:text-lg my-12'>PRESENTS</p>
        <img src='Logo.png' className='max-sm:h-40 h-80' />
        <div className="bg-yellow-300 min-h-52"></div>
      </div>
    </>
  )
}

export default Hero
