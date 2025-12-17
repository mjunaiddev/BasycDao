import React from "react";
import Image from "next/image";
import Frame33 from "@assets/frame-33.png";

const Roadmap = () => {
  return (
    <div>
      <Image className="w-full" src={Frame33} alt="frame33" />
      <div className="font-ChakraSemibold text-center text-black text-[64px] font-semibold pt-14 pb-14">
        About Us
      </div>
      <div className="flex justify-center gap-[60px] font-ChakraPetch font-medium text-3xl mb-7">
        <span className="text-[#083ED2]">Phase 1</span>
        <span>Phase 2</span>
        <span>Phase 3</span>
        <span>Phase 4</span>
      </div>
      <div className="flex justify-center">
        <div className="relative w-[1020px] h-2 rounded-[10px] bg-[#0000000F]">
          <div className="absolute left-40 top-0 h-2 w-[175px] rounded-[10px] bg-[#083ED2]" />
        </div>
      </div>
      <div className="text-center pb-56">
        <div className="font-ChakraPetch font-semibold text-5xl mt-11 mb-4">
          Foundation & launch
        </div>
        <div className="text-[#11111166]">
          <ul className="list-disc list-inside ">
            <li>BSYC token launch</li>
            <li>Staking and liquidity incentives activated</li>
            <li>Governance contract initialized</li>
            <li>Early governance participants onboarded</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
