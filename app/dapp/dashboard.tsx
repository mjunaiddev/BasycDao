import Loader from "@/src/components/loader";
import React from "react";

const Dashboard = () => {
  const isLoading = false;
  return (
    <>
      {isLoading && <Loader />}
      <div className="container">
        <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center  mb-9">
          Dashboard
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">BASYC DAO</span>
            <span className="font-normal">$0</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Basyc Dao FDV
            </span>
            <span className="font-normal">$0.00</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Basyc Dao Market Cap
            </span>
            <span className="font-normal">$0.00</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">Total Supply</span>
            <span className="font-normal">0.0000</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Uni-V2 LP Price
            </span>
            <span className="font-normal">$0.00</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Circulating supply
            </span>
            <span className="font-normal">0.00</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Basyc Dao APY
            </span>
            <span className="font-normal">$0.00</span>
          </div>
          <div className="flex justify-between py-12 px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-3xl">
            <span className="font-ChakraPetch font-semibold">
              Basyc Dao/ETH LP APY
            </span>
            <span className="font-normal">0.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
