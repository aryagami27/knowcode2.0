import {useEffect} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function Theme() {
  let tl= gsap.timeline({
    delay:0.5,
  })

  useEffect(() => {
    tl.to('#theme1',{
      x:0,
      duration:1,
      opacity:1,
      scrollTrigger:{
        trigger:'#theme1',
        start: "top center",
      }
    }).to('#theme2',{
      x:0,
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:'#theme2',
        start: "top center",
      }
    })
  }, [])
  

  return (
    <div className=' bg-[#005918] overflow-x-hidden'>
      <div className="h-[50vh] w-full bg-leave bg-repeat"></div>

      <div className='relative'>
        <img src='Wood.png' alt='wood' className='w-full z-0' />

        <img
          src='Steve.png'
          alt='Steve'
          id='theme1'
          className='absolute z-10 w-auto h-[100%] opacity-0 -translate-x-40'
          style={{
            top: '-20%',
            left: '0%',
          }}
        />

        <img
          src='Theme.png'
          alt='Theme'
          className='absolute inset-0 m-auto z-10 w-[90%] max-w-[1200px]  sm:px-0 mt-2'
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        <img
          src='Alex.png'
          alt='Alex'
          id='theme2'
          className='absolute z-10 w-auto h-[100%] opacity-0 translate-x-40'
          style={{
            bottom: '-60%',
            right: '0%',
          }}
        />
      </div>
      <div className="h-[50vh] w-full flex justify-center bg-leave bg-repeat pt-10">
        <div className="flex flex-wrap justify-center sm:space-x-5 sm:text-xl text-xs font-Minecraft">
        <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="aiml.png" alt="aiml" className='sm:size-16 size-10'/>
          </div>
          <p className='text-white mt-1'>AI/ML</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="Painting.png" alt="frontend" className='sm:size-20 mb-1 mr-1 size-14'/>
          </div>
          <p className='text-white mt-1'>Frontend </p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="cybersec1.png" alt="cybersecurity" className='sm:size-20 sm:mt-2 mt-1 size-14'/>
          </div>
          <p className='text-white mt-1'>CyberSecurity</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="cloudnative1.png" alt="blockchain" className='sm:size-28 size-20'/>
          </div>
          <p className='text-white mt-1'>Cloud Native</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="datascience.png" alt="frontend" className='sm:size-20 size-12 sm:mt-2 sm:ml-1 mt-1.5'/>
          </div>
          <p className='text-white mt-1'>Data Science</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="web3.png" alt="frontend" className='sm:size-16 size-11'/>
          </div>
          <p className='text-white mt-1'>WEB3</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="bitcoin.png" alt="blockchain" className='sm:size-20 size-16'/>
          </div>
          <p className='text-white mt-1'>BlockChain</p>
          </div>

          <div className='flex flex-col items-center'>
          <div className="sm:size-28 size-20  bg-hotbar bg-cover flex justify-center items-center">
            <img src="Iot.png" alt="frontend" className='sm:size-16 size-11'/>
          </div>
          <p className='text-white mt-1'>IOT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Theme;
