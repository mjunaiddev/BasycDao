import React from "react";

const Rewards = () => {
  return (
    <div className="container min-h-screen ">
      <div className="font-ChakraPetch font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#083ED2] text-center mb-9">
        Basyc Dao Rewards Distribution
      </div>

      <div className="flex flex-col gap-10 md:gap-14 lg:flex-row lg:gap-20">
        {/* Card 1 */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 justify-center items-center w-[250px] md:w-[480px] lg:w-[630px] py-3 md:py-6 lg:py-0 lg:min-h-[410px] mx-auto border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl">
          <div className="w-[200px] md:w-[380px] lg:w-[460px] flex flex-col gap-6 justify-center items-center">
            <div className="font-Urbanist font-normal text-lg md:text-2xl lg:text-3xl text-[#EFEAE4] text-center lg:leading-[55px]">
              Lorem ipsum dolor sit amet consectetur. Donec condimentum senectus
              vel eu diam.
            </div>

            <button className="text-white font-medium md:font-semibold lg:font-bold text-base md:text-lg lg:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] py-2 md:py-3 lg:py-4 px-7 md:px-10 lg:px-14">
              Distribution of <strong>Basyc</strong> rewards
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-3 md:gap-4 lg:gap-6 justify-center items-center w-[250px] md:w-[480px] lg:w-[630px] py-3 md:py-6 lg:py-0 lg:min-h-[410px] mx-auto border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl">
          <div className="w-[200px] md:w-[380px] lg:w-[460px] flex flex-col gap-6 justify-center items-center">
            <div className="font-Urbanist font-normal text-lg md:text-2xl lg:text-3xl text-[#EFEAE4] text-center lg:leading-[55px]">
              Lorem ipsum dolor sit amet consectetur. Donec condimentum senectus
              vel eu diam.
            </div>

            <button className="text-white font-medium md:font-semibold lg:font-bold text-base md:text-lg lg:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] py-2 md:py-3 lg:py-4 px-7 md:px-10 lg:px-14">
              Distribution of <strong>Basyc</strong> rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
