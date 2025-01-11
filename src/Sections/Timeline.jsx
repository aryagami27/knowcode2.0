import {useEffect} from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(MotionPathPlugin);


function Timeline() {
  useEffect(() => {
    gsap.set('#piece',{
      xPercent:-50,
      yPercent:-50,
      transformOrigin:"50% 50%"
    });

    gsap.to('#piece',{
      duration:10,
      repeat:-1,
      motionPath: {
        path:"#map_path",
        autoRotate:true
      }
    })
    
    return () => {
      
    }
  }, [])
  

  return (
    <div
      className="w-full flex justify-center items-center absolute z-30 sm:top-[110vh] lg:top-[45vh] xl:top-[160vh]"
      id="timeline"
    >
      <div className="flex justify-center items-center">

      <img src="map.png" className="sm:size-[75%] xl:size-[50%] size-[90%] " />
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 892.16 889.31"
        className="absolute sm:size-[91%] xl:size-[87%] size-[90%]"
      >
        <path
          className="cls-2"
          width={50}
          height={50}
          id="map_path"
          d="m150.24,22.25c-36.03,13.27-77.31,41.58-49.7,99.25,45,94,179,119,260.5,119.5s227.5-55.5,339.5,31.5,28,154,28,154c0,0-114,134-325,65s-156,78-156,78c0,0,17,71,217,109,147.29,27.99,251.2,87.97,295.73,117.65"
          style={{
            fill: "none",
            stroke: "#000",
            strokeMiterlimit: 10,
            strokeWidth: 10,
            strokeDasharray: "0 0 29.7 29.7",
          }}
        />
      </svg>
      </div>
      <div className="size-8 absolute left-0 top-0 bg-green-500 rounded-full z-50" id="piece"></div>
    </div>
  );
}

export default Timeline;
