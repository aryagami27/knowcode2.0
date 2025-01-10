import React from 'react'

function About() {
  return (
    <div className='relative w-full h-[60vh] bg-[#005918] flex justify-center items-center px-8'>
      <img src='about section.png' className='sm:max-h-[56vh] h-[75%] object-cover sm:object-fill rounded-2xl sm:rounded-none' />
      <div className="absolute w-full flex items-center h-full top-0">
        <div className="sm:w-[70%] w-full px-16 flex flex-col">
          <p className='font-Minecrafter text-2xl'>ABOUT</p>
          <p className='font-Minecraft sm:text-sm text-xs'>
            Embark on a Techno-spheric voyage at "Know-Code", the flagship 36-hour hackathon hosted by S4DS at K J Somaiya Institute of Technology (Sion). Ignite your creativity in this domain-flexible coding marathon, where innovation knows no bounds. Unleash your coding prowess, collaborate with brilliant minds, and transform ideas into reality. Know-Code isn't just any event; it's a journey into the future of technology, a realm where every line of code is rewarded for shaping tomorrow's possibilities.
          </p>
        </div>
        <div className="w-[30%] h-full sm:flex hidden justify-center">
          <img src="Villager.png" alt="" className='h-[90%]' />
        </div>
      </div>
    </div>
  )
}

export default About
