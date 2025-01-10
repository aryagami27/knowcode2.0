import React from 'react'

function Navbar() {
  return (
    <div className='fixed m-2 z-50'>
      <div className="bg-[#004D14] px-4 py-2 h-10 rounded-full flex justify-center items-center gap-2 shadow-lg">
        <div className="h-8 flex justify-center items-center p-2 rounded-full cursor-pointer">
          <a href="#home">
            <img src='home.svg' className='size-6' />
          </a>
        </div>
        <div className="h-8 flex justify-center items-center p-2 rounded-full cursor-pointer">
          <a href="#clock">
            <img src='clock.svg' className='size-6' />
          </a>
        </div>
        <div className="h-8 flex justify-center items-center p-2 rounded-full cursor-pointer">
          <a href="#about">
            <img src='compass.svg' className='size-6' />
          </a>
        </div>
        <div className="h-8 flex justify-center items-center p-2 rounded-full cursor-pointer">
          <a href="#timeline">
            <img src='git-commit.svg' className='size-6' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
