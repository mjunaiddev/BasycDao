import React from "react";

const Withdraw = () => {
  return (
    <div className="container">
      <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center mb-9">
        Withdraw
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between h-[182px] w-[680px] mx-auto px-9 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col gap-2 justify-center">
            <div className="font-ChakraPetch font-bold text-2xl text-[#083ED2]">
              Withdraw LP
            </div>
            <div className="font-Urbanist font-semibold text-[40px]">
              0.891723
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end justify-center">
            <div className="px-2 font-normal text-lg rounded-[30px] bg-[#FFFFFF14]">
              1% fee will be detected for each transaction
            </div>
            <button className="w-[170px] py-4 text-white font-medium text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] ">
              Claim
            </button>
          </div>
        </div>
        <div className="flex justify-between h-[182px] w-[680px] mx-auto px-9 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col gap-2 justify-center">
            <div className="font-ChakraPetch font-bold text-2xl text-[#083ED2]">
              Withdraw Token
            </div>
            <div className="font-Urbanist font-semibold text-[40px]">
              0.891723
            </div>
          </div>
          <div className="flex flex-col gap-3 items-end justify-center">
            <div className="px-2 font-normal text-lg rounded-[30px] bg-[#FFFFFF14]">
              1% fee will be detected for each transaction
            </div>
            <button className="w-[170px] py-4 text-white font-medium text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] ">
              Claim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
