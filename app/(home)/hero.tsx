import React from "react";
import Image from "next/image";
import Signout from "@assets/sign-out.png";
import Frame32 from "@assets/frame-32.png";
const Hero = () => {
  return (
    <>
      <div className="bg-cover flex items-center border-t border-black h-[1000px] bg-HeroBg">
        <div className="container">
          <div className="flex flex-col gap-6 w-full max-w-[700px]">
            <div>
              <div className="flex items-center justify-center w-[230px] h-14 bg-[#083ED21A] rounded-[100px]">
                <div className="flex gap-2 items-center">
                  <span className="w-4 h-4 bg-[#62FF00] rounded-full inline-block"></span>
                  <span>BASYC is </span>
                  <span className="text-[#FF0000]">Live</span>{" "}
                </div>
              </div>
              <div>
                <div>
                  <div className="font-ChakraSemibold font-semibold">
                    <div className="text-[115px]">Basyc Dao,</div>
                    <div className="text-5xl">
                      stability engineered by supply intelligence.
                    </div>
                  </div>
                  <div className="font-medium text-xl text-[#000000] w-[600px]">
                    Basyc Dao is an algorithmic stablecoin protocol that adjusts
                    supply in real time to maintain price equilibrium, governed
                    fully on-chain by its holders.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="flex items-center gap-2 px-7 py-4 rounded-xl text-white bg-[#083ED2]">
                <Image src={Signout} alt="Signout" />
                Launch App
              </button>
            </div>
          </div>
        </div>
      </div>
      <Image className="w-full" src={Frame32} alt="frame32" />
    </>
  );
};

export default Hero;
