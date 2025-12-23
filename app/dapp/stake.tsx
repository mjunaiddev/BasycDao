import React from "react";

const Stake = () => {
  const stakeCards = [
    {
      title: "Add LP",
      balance: "0.245 ETH",
      poolShare: "1.001%",
    },
    {
      title: "Stake LP",
      balance: "0.245 ETH",
    },
    {
      title: "Stake LP",
      balance: "0.245 ETH",
      poolShare: "0.542%",
    },
  ];

  return (
    <div className="container min-h-screen">
      <div className="font-ChakraPetch font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#083ED2] text-center mb-9">
        Stake Basyc Dao
      </div>

      <div className="flex flex-col gap-6">
        {stakeCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row gap-4 justify-between lg:justify-center items-center min-h-44 px-4 md:px-6 lg:px-0 pb-4 lg:pb-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white"
          >
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <span className="font-ChakraPetch font-bold text-xl md:text-2xl">
                  {card.title}
                </span>

                <div>
                  <span className="font-Urbanist font-bold text-lg md:text-xl">
                    Balance :
                  </span>{" "}
                  <span className="font-Urbanist font-medium text-base md:text-lg">
                    {card.balance}
                  </span>
                </div>
              </div>

              <div className="flex lg:gap-[850px] items-center justify-between bg-[#222222] border border-[#575757] rounded-lg backdrop-blur-[20px] px-4 md:px-7 py-2 font-Urbanist">
                <input
                  type="text"
                  placeholder="Enter ETH Amount"
                  className="bg-transparent outline-none font-medium text-sm text-white w-full"
                />
                <span className="font-bold text-lg md:text-xl text-[#083ED2] cursor-pointer">
                  MAX
                </span>
              </div>

              {card.poolShare && (
                <div>
                  <span className="font-Urbanist font-bold text-lg md:text-xl">
                    Pool Share :
                  </span>{" "}
                  <span className="font-Urbanist font-medium text-base md:text-lg">
                    {card.poolShare}
                  </span>
                </div>
              )}
            </div>

            <button className="h-11 lg:my-auto w-full md:w-[200px] lg:w-auto text-white font-medium text-lg md:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-10 md:px-12">
              Supply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stake;
