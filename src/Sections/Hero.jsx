import {useEffect} from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'

function Hero() {

  useEffect(() => {
    gsap.to('#logo',{
      duration: 2,
      opacity:1,
      y:10,
      delay: 1.5
    })
  }, [])
  

  return (
    <div className='relative' id='home'>
      <div className="flex flex-col items-center w-full py-8 justify-center">
        <img src='S4DSlogo.png' className='mt-32 size-52 max-sm:size-40' />
        <p className='text-white font-bold text-2xl pt-10 max-sm:text-lg my-12'>PRESENTS</p>
        <img src='Logo.png' id='logo' className='max-sm:h-40 h-80 translate-y-40 opacity-0' />
        <div className="bg-yellow-300 min-h-52"></div>
      </div>
      <div className="text-[#C2C2C2] h-screen flex justify-center items-center flex-col" id='clock'>
        <p className=' font-Minecrafter text-center text-4xl' style={{textShadow: "0px 8px #000000",WebkitTextStroke: "2px black"}}>Time Left</p>
        <p className='font-Minecrafteralt sm:text-8xl text-6xl text-center pb-[50vh]' style={{textShadow: "0px 12px #000000",WebkitTextStroke: "2px black"}}>1D:11H:11M</p>
      </div>
    </div>
  )
}

export default Hero
