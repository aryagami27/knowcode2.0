import {useEffect} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

function Prizepool() {

  useEffect(() => {
    gsap.to('#d',{
      opacity:1,
      duration:1,
      scrollTrigger:{
        trigger:'#d',
        start: "top center",
      }
    })
  }, [])
  

  return (
    <div className="w-full">
      <img src="Stoneslab.png" className="object-cover w-full" />
      <img src="Stoneslab.png" className="object-cover w-full" />
      <img src="Stoneslab.png" className="object-cover w-full" />
      <img src="Stoneslab.png" className="object-cover w-full" />
      <img src="Stoneslab.png" className="object-cover w-full" />
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]">
        <div className="absolute  w-full h-full top-0 mt-10 py-12 px-2 flex flex-col justify-between">
          <p className="text-white font-Minecrafter sm:text-6xl text-4xl text-center">
            Prizepool
          </p>
          <div className="flex gap-8 justify-around items-center">
            <div className="flex flex-col items-center opacity-0" id="d">
              <div className="bg-black bg-opacity-45 px-1 mb-1">
              <p className="text-white sm:text-2xl text-center text-sm font-Minecraft">
                2nd Runner Up
              </p>
              </div>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                15K
              </p>
              <img src="Iron Armour.png" className="sm:h-80 h-32 "/>
            </div>
            <div className="flex flex-col items-center opacity-0" id="d">
              <div className="bg-black bg-opacity-45 px-1 mb-1">
              <p className="text-white sm:text-3xl text-sm font-Minecraft">
                Winner
              </p>
              </div>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                35K
              </p>
              <img src="Nethrite Armour.png" className="sm:h-[400px] h-40 " />
            </div>
            <div className="flex flex-col items-center opacity-0" id="d">
              <div className="bg-black bg-opacity-45 px-1 mb-1">
              <p className="text-white sm:text-2xl text-center text-sm font-Minecraft">
                1st Runner Up
              </p>
              </div>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                25K
              </p>
              <img src="Diamond armour.png" className="sm:h-[360px] h-40" />
            </div>
          </div>
        </div>
      </div>
      <img src="Stoneslab.png" className="object-cover w-full" />
      <div className="bg-passage bg-center bg-no-repeat bg-cover flex justify-center py-8 px-4">
        <div className="w-full bg-signbkg rounded-2xl py-4 px-2 text-black max-w-[1200px] h-full gap-4 flex flex-col justify-center">
          <p className="text-4xl font-Minecrafter text-center ">Guidelines</p>
          <div className="font-semibold max-sm:text-xs lg:text-lg text-justify px-4 font-Minecraft">
            <p>
              1) Participants are required to remain within the college premises
              during the Hackathon, seeking permission from volunteers if there's
              a need to leave.
            </p>
            <p>
              2) The decisions made by the judging panel are final
              and binding. Participants are expected to respect and abide by the
              outcomes.
            </p>
            <p>
              3) Any form of misbehavior, whether directed towards team
              members, volunteers, judges, or evaluators, will not be tolerated.
              Participants are encouraged to maintain a positive and collaborative
              environment.
            </p>
            <p>
              4) Participants are responsible for bringing their own
              laptops, chargers, and any other necessary devices required for the
              implementation of their projects.
            </p>
            <p>
              5) Projects must span at least two
              specified domains. It is essential to integrate diverse aspects into
              the project to showcase a comprehensive skill set.
            </p>
            <p>
            6) Projects should
              be designed with real-life applications in mind, addressing
              practical issues and providing tangible solutions.
            </p>
            <p>
            7) Hackathon
              prioritizes research, avoids code memorization, and encourages
              internet use for inclusive collaboration, fostering innovation in a
              supportive environment.
            </p>
          </div>
        </div>
      </div>
      <img src="Stoneslab.png" className="object-cover w-full" />
      {/* <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]"></div>
      <img src="Stoneslab.png" className="object-cover w-full" /> */}
    </div>
  );
}

export default Prizepool;
