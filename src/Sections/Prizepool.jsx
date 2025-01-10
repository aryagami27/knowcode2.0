import React from "react";

function Prizepool() {
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
            <div className="flex flex-col items-center">
              <p className="text-white sm:text-lg text-center text-sm font-Minecraft">
                2nd Runnerup
              </p>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                15K
              </p>
              <img src="Iron Armour.png" className="sm:h-80 h-32 " />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white sm:text-lg text-sm font-Minecraft">
                Winner
              </p>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                35K
              </p>
              <img src="Nethrite Armour.png" className="sm:h-[400px] h-40 " />
            </div>
            <div className="flex flex-col items-center">
              <p className="text-white sm:text-lg text-center text-sm font-Minecraft">
                1nd Runnerup
              </p>
              <p className="text-white font-Minecrafteralt sm:text-4xl text-2xl">
                25K
              </p>
              <img src="Diamond armour.png" className="sm:h-[360px] h-40" />
            </div>
          </div>
        </div>
      </div>
      <img src="Stoneslab.png" className="object-cover w-full" />
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[150vh] h-[450px] flex justify-center">
        <div className="absolute w-full max-w-[1200px] h-full top-0 text-white gap-4 flex flex-col justify-center">
          <p className="text-4xl font-Minecrafter text-center ">Guideline</p>
          <div className="max-sm:text-xs text-justify px-4">
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
      <div className="relative bg-passage bg-center bg-no-repeat bg-cover sm:h-[100vh] h-[400px]"></div>
      <img src="Stoneslab.png" className="object-cover w-full" />
    </div>
  );
}

export default Prizepool;
