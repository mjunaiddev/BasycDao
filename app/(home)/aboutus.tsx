import React from "react";
import Image from "next/image";
import AboutImg from "@assets/about-img.png";
import { abey } from "@reown/appkit/networks";

const Aboutus = () => {
  return (
    <div className=" bg-black">
      <div className="containe pb-32">
        <div className="font-ChakraSemibold text-center text-white text-[64px] font-semibold pt-[90px] pb-10">
          About Us
        </div>
        <div className="flex w-[1350px] h-[520px] gap-10 mx-auto items-center justify-center text-white rounded-[20px] bg-[#181817] border-2 border-[#FFFFFF0F]">
          <div className="w-[475px]">
            <div className="font-ChakraPetch font-medium text-[40px]">
              Join as a governance participant
            </div>
            <div className="text-[#FFFFFF66]">
              Basyc Dao is a decentralized economic protocol designed to create
              lasting stability through community-owned monetary governance.
              Instead of rewarding speculation, its model prioritizes
              contributors who stake, provide liquidity, and actively
              participate in decision-making. By aligning incentives with
              long-term commitment, Basyc Dao offers holders economic upside
              that is rooted in utility, not hype — building a financial system
              that strengthens as its community grows.
            </div>
            <div className="flex gap-2 w-[600px]">
              <div className="px-7 py-4 text-white rounded-[100px] bg-[#181817] border-[#FFFFFF0F] border-2">
                Enter Governance Portal
              </div>
              <div className="px-7 py-4 text-white rounded-[100px] bg-[#181817] border-[#FFFFFF0F] border-2">
                Unlock Exclusive Rewards
              </div>
            </div>
          </div>
          <div className="rounded-[30px]">
            <Image src={AboutImg} alt="AboutImg" width={660} height={375} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
