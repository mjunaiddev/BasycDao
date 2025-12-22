import React from "react";

const Rewards = () => {
  return (
    <div className="container">
      <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center mb-9">
        Basyc Dao Rewards Distribution
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-6 justify-center items-center w-[630px] min-h-[410px] mx-auto border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl">
          <div className="w-[460px] flex flex-col gap-6 justify-center items-center">
            <div className="font-Urbanist font-normal text-3xl text-[#EFEAE4] text-center leading-[55px]">
              Lorem ipsum dolor sit amet consectetur. Donec condimentum senectus
              vel eu diam.
            </div>
            <button className=" text-white font-bold text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] py-4 px-14">
              Distribution of <strong>Basyc</strong> rewards
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-6 justify-center items-center w-[630px] min-h-[410px] mx-auto border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl">
          <div className="w-[460px] flex flex-col gap-6 justify-center items-center">
            <div className="font-Urbanist font-normal text-3xl text-[#EFEAE4] text-center leading-[55px]">
              Lorem ipsum dolor sit amet consectetur. Donec condimentum senectus
              vel eu diam.
            </div>
            <button className=" text-white font-bold text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] py-4 px-14">
              Distribution of <strong>Basyc LP</strong> rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
