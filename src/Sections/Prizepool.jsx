import React from 'react'

function Prizepool() {
  return (
    <div>
      <img src='Stoneslab.png' />
      <img src='Stoneslab.png' />
      <div className="relative">
        <img src='Unground passage.png' />
        <div className="absolute w-full h-full top-0 py-12 px-2 flex flex-col justify-between">
          <p className='text-white font-Minecrafter text-4xl text-center'>Prizepool</p>
          <div className="flex gap-8 justify-around items-center">
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>2nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>15K</p>
              <img src='Iron Armour.png' className='sm:h-64 h-32 ' />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>2nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>35K</p>
              <img src='Nethrite Armour.png' className='sm:h-[360px] h-40 ' />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>1nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>25K</p>
              <img src='Diamond armour.png' className='sm:h-80 h-40' />
            </div>
          </div>
        </div>
      </div>
      <img src='Stoneslab.png' />
      <div className="">
        <img src='Unground passage.png' />
      </div>
      <img src='Stoneslab.png' />
      <div className="">
        <img src='Unground passage.png' />
      </div>
      <img src='Stoneslab.png' />
    </div>
  )
}

export default Prizepool
