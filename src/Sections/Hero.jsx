import { useEffect, useState } from "react";
import gsap from "gsap";

function Hero() {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Animation for logo
    gsap.to("#logo", {
      duration: 2,
      opacity: 1,
      y: 10,
      delay: 1.5,
    });

    const targetDate = new Date("January 24, 2025 13:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft("00D:00H:00M");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days}D:${hours.toString().padStart(2, "0")}H:${minutes
          .toString()
          .padStart(2, "0")}M:${seconds.toString().padStart(2, "0")}S`
      );
    };

    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative" id="home">
      <div className="flex flex-col items-center w-full py-8 justify-center">
        <img src="S4DSlogo.png" className="mt-32 size-52 max-sm:size-40" />
        <p className="text-white text-4xl pt-10 max-sm:text-lg my-12 font-Minecrafter">
          PRESENTS
        </p>
        <img
          src="Logo.png"
          id="logo"
          className="max-sm:h-40 h-80 translate-y-40 opacity-0"
        />
        <div className="bg-yellow-300 min-h-52"></div>
      </div>
      <div
        className="text-[#C2C2C2] h-screen flex justify-center items-center flex-col"
        id="clock"
      >
        <p
          className="font-Minecrafter text-center text-4xl"
          style={{
            textShadow: "0px 8px #000000",
            WebkitTextStroke: "2px black",
          }}
        >
          Time Left
        </p>
        <p
          className="font-Minecrafteralt sm:text-8xl text-6xl text-center pb-[50vh]"
          style={{
            textShadow: "0px 12px #000000",
            WebkitTextStroke: "2px black",
          }}
        >
          {timeLeft}
        </p>
      </div>
    </div>
  );
}

export default Hero;
