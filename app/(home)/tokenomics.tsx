import React from "react";
import Image from "next/image";
import Tokenomicsimg from "@assets/tokenomics-img.png";

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="flex flex-col lg:flex-row justify-center items-center gap-10 mb-24 px-4"
    >
      {/* Image Section */}
      <div className="flex items-center justify-center bg-TokenomicsBg bg-cover w-full max-w-[564px] aspect-square">
        <Image
          src={Tokenomicsimg}
          alt="Tokenomics Image"
          className="max-w-40 md:max-w-full h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="bg-[#083ED20D] md:bg-white md:bg-TokenomicsBg2 w-full max-w-[875px] md:h-[633px] rounded-lg">
        {/* Heading */}
        <div className="font-ChakraSemibold text-center text-black text-4xl md:text-[64px] font-semibold pt-14 pb-14">
          Tokenomics
        </div>

        {/* Stats */}
        <div className="flex flex-col gap-9 px-6 pb-10 md-pb-0 md:px-16 md:w-[590px] md:ml-[232px] mx-auto">
          {/* Item */}
          {[
            { label: "Liquidity", value: "80%", width: "80%" },
            { label: "Marketing", value: "10%", width: "10%" },
            { label: "Buy & Sell Tax", value: "6%", width: "6%" },
            { label: "Team", value: "4%", width: "4%" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col gap-4 justify-center">
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-3xl">{item.label}</span>
                <span className="font-ChakraSemibold font-semibold text-lg md:text-3xl">
                  {item.value}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative w-full h-2 rounded-[10px] bg-[#0000000F] -z-10">
                <div
                  className="absolute left-0 top-0 h-2 rounded-[10px] bg-[#083ED2]"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
