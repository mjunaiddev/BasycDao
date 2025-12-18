import React from "react";
import Image from "next/image";
import Tokenomicsimg from "@assets/tokenomics-img.png";

const Tokenomics = () => {
  return (
    <div id="tokenomics" className="flex justify-center mb-24">
      <div className="flex items-center justify-center bg-TokenomicsBg bg-cover w-[564px] h-[564px]">
        <Image src={Tokenomicsimg} alt="Tokenomics Image" />
      </div>
      <div className="bg-TokenomicsBg2 w-[875px] h-[633px]">
        <div className="font-ChakraSemibold text-center text-black text-[64px] font-semibold mt-9 mb-9">
          Tokenomics
        </div>
        <div className="flex flex-col gap-9 ml-[232px] w-[590px]">
          <div className="flex items-center justify-between">
            <span className="text-3xl">Liquidity</span>
            <span className="font-ChakraSemibold font-semibold text-3xl">
              80%
            </span>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[590px] h-2 rounded-[10px] bg-[#0000000F]">
              <div className="absolute left-0 top-0 h-2 w-[385px] rounded-[10px] bg-[#083ED2]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl">Marketing</span>
            <span className="font-ChakraSemibold font-semibold text-3xl">
              10%
            </span>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[590px] h-2 rounded-[10px] bg-[#0000000F]">
              <div className="absolute left-0 top-0 h-2 w-[165px] rounded-[10px] bg-[#083ED2]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl">Buy & Sell Tax</span>
            <span className="font-ChakraSemibold font-semibold text-3xl">
              6%
            </span>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[590px] h-2 rounded-[10px] bg-[#0000000F]">
              <div className="absolute left-0 top-0 h-2 w-[115px] rounded-[10px] bg-[#083ED2]" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl">Team</span>
            <span className="font-ChakraSemibold font-semibold text-3xl">
              4%
            </span>
          </div>
          <div className="flex justify-center">
            <div className="relative w-[590px] h-2 rounded-[10px] bg-[#0000000F]">
              <div className="absolute left-0 top-0 h-2 w-[75px] rounded-[10px] bg-[#083ED2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
