import Loader from "@/src/components/loader";
import React from "react";

// Dashboard cards data
const dashboardCards = [
  { title: "BASYC DAO", value: "$0" },
  { title: "Basyc Dao FDV", value: "$0.00" },
  { title: "Basyc Dao Market Cap", value: "$0.00" },
  { title: "Total Supply", value: "0.0000" },
  { title: "Uni-V2 LP Price", value: "$0.00" },
  { title: "Circulating supply", value: "0.00" },
  { title: "Basyc Dao APY", value: "$0.00" },
  { title: "Basyc Dao/ETH LP APY", value: "0.00" },
];

const Dashboard = () => {
  const isLoading = false;

  return (
    <>
      {isLoading && <Loader />}
      <div className="h-screen w-full overflow-y-auto px-4 container mx-auto">
        {/* Dashboard Title */}
        <div className="font-ChakraPetch font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#083ED2] text-center mb-9">
          Dashboard
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between py-8 px-6 sm:py-12 sm:px-8 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white text-2xl sm:text-3xl"
            >
              <span className="font-ChakraPetch font-semibold mb-2 sm:mb-0">
                {card.title}
              </span>
              <span className="font-normal">{card.value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
