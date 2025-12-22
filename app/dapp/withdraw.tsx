import React from "react";

const Withdraw = () => {
  return (
    /* ✅ Full-page scroll + bottom padding on small screens */
    <div className="container max-h-screen overflow-y-auto lg:max-h-none lg:overflow-visible pb-24 lg:pb-0">
      {/* Heading */}
      <div className="font-ChakraPetch font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#083ED2] text-center mb-9">
        Withdraw
      </div>

      {/* Cards wrapper */}
      <div className="flex flex-col gap-4">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row justify-between h-auto md:h-[182px] w-full md:w-[680px] mx-auto px-4 md:px-9 py-4 md:py-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          {/* Left */}
          <div className="flex flex-col gap-2 justify-center text-center md:text-left">
            <div className="font-ChakraPetch font-bold text-xl md:text-2xl text-[#083ED2]">
              Withdraw LP
            </div>
            <div className="font-Urbanist font-semibold text-3xl md:text-[40px]">
              0.891723
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-center md:items-end justify-center mt-4 md:mt-0">
            <div className="px-2 font-normal text-sm md:text-lg rounded-[30px] bg-[#FFFFFF14] text-center md:text-right">
              1% fee will be detected for each transaction
            </div>
            <button className="w-full md:w-[170px] py-3 md:py-4 text-white font-medium text-lg md:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px]">
              Claim
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row justify-between h-auto md:h-[182px] w-full md:w-[680px] mx-auto px-4 md:px-9 py-4 md:py-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          {/* Left */}
          <div className="flex flex-col gap-2 justify-center text-center md:text-left">
            <div className="font-ChakraPetch font-bold text-xl md:text-2xl text-[#083ED2]">
              Withdraw Token
            </div>
            <div className="font-Urbanist font-semibold text-3xl md:text-[40px]">
              0.891723
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-3 items-center md:items-end justify-center mt-4 md:mt-0">
            <div className="px-2 font-normal text-sm md:text-lg rounded-[30px] bg-[#FFFFFF14] text-center md:text-right">
              1% fee will be detected for each transaction
            </div>
            <button className="w-full md:w-[170px] py-3 md:py-4 text-white font-medium text-lg md:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px]">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
