import React from "react";
import Image from "next/image";
import Signout from "@assets/sign-out.png";
import Frame32 from "@assets/frame-32.png";

const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="bg-cover bg-center flex items-center min-h-screen md:h-[1024px] bg-HeroBg px-4"
      >
        <div className="container">
          <div className="flex flex-col gap-6 w-full max-w-[700px]">
            <div className="flex items-center justify-center w-[200px] md:w-[230px] h-12 md:h-14 bg-[#083ED21A] rounded-[100px]">
              <div className="flex gap-2 items-center text-sm md:text-base">
                <span className="w-3 h-3 md:w-4 md:h-4 bg-[#62FF00] rounded-full inline-block"></span>
                <span>BASYC is</span>
                <span className="text-[#FF0000]">Live</span>
              </div>
            </div>

            {/* Headings */}
            <div className="font-ChakraSemibold font-semibold">
              <div className="text-4xl sm:text-6xl md:text-[115px] leading-tight">
                Basyc Dao,
              </div>
              <div className="text-xl sm:text-2xl md:text-5xl">
                stability engineered by supply intelligence.
              </div>
            </div>

            {/* Description */}
            <div className="font-medium text-sm sm:text-base md:text-xl text-[#000000] max-w-full md:max-w-[600px]">
              Basyc Dao is an algorithmic stablecoin protocol that adjusts
              supply in real time to maintain price equilibrium, governed fully
              on-chain by its holders.
            </div>

            {/* CTA Button */}
            <div>
              <button className="flex items-center gap-2 px-6 md:px-7 py-3 md:py-4 rounded-xl text-white bg-[#083ED2] text-sm md:text-base">
                <Image
                  src={Signout}
                  alt="Signout"
                  className="w-4 h-4 md:w-auto md:h-auto"
                />
                Launch App
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Frame */}
      <Image className="w-full h-auto" src={Frame32} alt="frame32" priority />
    </>
  );
};

export default Hero;
