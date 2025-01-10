import React from 'react'

function Hero() {
  return (
    <div className='relative' id='home'>
      <div className="flex flex-col items-center w-full py-8 justify-center">
        <img src='S4DSlogo.png' className='mt-32 size-52 max-sm:size-40' />
        <p className='text-white font-bold text-2xl pt-10 max-sm:text-lg my-12'>PRESENTS</p>
        <img src='Logo.png' className='max-sm:h-40 h-80' />
        <div className="bg-yellow-300 min-h-52"></div>
      </div>
      <div className="relative" id='clock'>
        <p className='text-white font-Minecrafter text-center text-4xl'>Time Left</p>
        {/* <p>timer</p> */}
      </div>
    </div>
  )
}

export default Hero
