import React from "react";
import Image from "next/image";
import AboutImg from "@assets/about-img.png";

const Aboutus = () => {
  return (
    <div className="bg-black">
      <div id="about" className="container pb-20 md:pb-32 px-4">
        {/* Heading */}
        <div className="font-ChakraSemibold text-center text-white text-4xl md:text-[64px] font-semibold pt-16 md:pt-[90px] pb-10">
          About Us
        </div>

        {/* Content Card */}
        <div className="flex flex-col lg:flex-row gap-10 mx-auto items-center justify-center text-white rounded-[20px] bg-[#181817] border-2 border-[#FFFFFF0F] p-6 md:p-10 max-w-[1350px]">
          {/* Text Section */}
          <div className="w-full lg:max-w-[475px]">
            <div className="font-ChakraPetch font-medium text-2xl md:text-[40px] mb-4">
              Join as a governance participant
            </div>

            <div className="text-[#FFFFFF66] text-sm md:text-base leading-relaxed mb-6">
              Basyc Dao is a decentralized economic protocol designed to create
              lasting stability through community-owned monetary governance.
              Instead of rewarding speculation, its model prioritizes
              contributors who stake, provide liquidity, and actively
              participate in decision-making. By aligning incentives with
              long-term commitment, Basyc Dao offers holders economic upside
              that is rooted in utility, not hype — building a financial system
              that strengthens as its community grows.
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button className="px-6 py-3 text-white rounded-[100px] bg-[#181817] border border-[#FFFFFF0F] text-sm md:text-base">
                Enter Governance Portal
              </button>
              <button className="px-6 py-3 text-white rounded-[100px] bg-[#181817] border border-[#FFFFFF0F] text-sm md:text-base">
                Unlock Exclusive Rewards
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full max-w-[660px] rounded-[30px] overflow-hidden">
            <Image
              src={AboutImg}
              alt="About Image"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
