import React from 'react'

function Prizepool() {
  return (
    <div className='w-full'>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <img src='Stoneslab.png' className='object-cover w-full'/>
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]">
        <div className="absolute  w-full h-full top-0 mt-10 py-12 px-2 flex flex-col justify-between">
          <p className='text-white font-Minecrafter sm:text-6xl text-4xl text-center'>Prizepool</p>
          <div className="flex gap-8 justify-around items-center">
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>2nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>15K</p>
              <img src='Iron Armour.png' className='sm:h-80 h-32 ' />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>2nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>35K</p>
              <img src='Nethrite Armour.png' className='sm:h-[400px] h-40 ' />
            </div>
            <div className="flex flex-col items-center">
              <p className='text-white sm:text-lg text-sm font-Minecraft'>1nd Runner-up</p>
              <p className='text-white font-Minecrafteralt sm:text-4xl text-2xl'>25K</p>
              <img src='Diamond armour.png' className='sm:h-[360px] h-40' />
            </div>
          </div>
        </div>
      </div>
      <img src='Stoneslab.png' className='object-cover w-full' />
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]">
      </div>
      <img src='Stoneslab.png' className='object-cover w-full' />
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]">
      </div>
      <img src='Stoneslab.png' className='object-cover w-full' />
    </div>
  )
}

export default Prizepool
