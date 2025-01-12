import { useEffect } from "react";

function Timeline() {

  return (
    <div
      className="w-full flex justify-center items-center absolute z-30 sm:top-[110vh] lg:top-[45vh] xl:top-[190vh] mt-1"
      id="timeline"
    >
      <img src="map.png" className="sm:size-[75%] xl:size-[50%] size-[75%]" />
    </div>
  );
}

export default Timeline;
