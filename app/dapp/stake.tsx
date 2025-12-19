import React from "react";

const Stake = () => {
    const stakeCards = [
  {
    title: "Add LP",
    balance: "0.245 ETH",
  },
  {
    title: "Stake LP",
    balance: "0.245 ETH",
  },
  {
    title: "Stake LP",
    balance: "0.245 ETH",
  },
];

    
  return (
    <div className="container">
      <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center">
        Stake Basyc Dao
      </div>
      <div className="flex flex-col gap-6">
        {stakeCards.map((card, index) => (
        <div key={index} className="flex gap-4 justify-center border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col gap-4 py-4">
            <div className="flex items-center justify-between">
              <span className="font-ChakraPetch font-bold text-2xl">
                {card.title}
              </span>
              <div>
                <span className="font-Urbanist font-bold text-xl">
                  Balance :
                </span>
                <span className="font-Urbanist font-medium text-lg">
                  {card.balance}
                </span>
              </div>
            </div>

            <div className="flex gap-[850px] justify-between items-center bg-[#222222]  border-1 border-[#575757] rounded-lg backdrop-blur-[20px] px-7 py-2 font-Urbanist">
              <span className="font-medium text-sm text-[#FFFFFF4D]">Enter ETH Amount</span>
              <span className="font-bold text-xl text-[#083ED2]">MAX</span>
            </div>

            <div>
              <span className="font-Urbanist font-bold text-xl">
                Pool Share :
              </span>
              <span className="font-Urbanist font-medium text-lg">1.001%</span>{" "}
            </div>
          </div>
          <button className="h-11 my-auto text-white font-medium text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-12">
            Supply
          </button>
        </div>))}
      </div>
    </div>
  );
};

export default Stake;
