import React from "react";
import Image from "next/image";
import Coin from "@assets/coin.png";
import Guardprotection from "@assets/guard-protection.png";
import Drop from "@assets/drop-half.png";
import Ticket from "@assets/ticket.png";
import Tree from "@assets/tree.png";
import Gamecontroller from "@assets/game-controller.png";
import Burn from "@assets/burn.png";
import Cloudaudit from "@assets/cloud-audit.png";

const Features = () => {
  return (
    <div className=" bg-black">
      <div id="features" className="container">
        <div className="flex flex-col pt-32 pb-14">
          <div className="mx-auto md:w-[850px]">
            <div className="font-ChakraSemibold text-center text-white text-4xl md:text-[64px] font-semibold pt-16 md:pt-[90px] pb-10">
              Features
            </div>
            <div className="font-medium text-base md:text-xl text-center text-[#FFFFFF66]">
              A stable, transparent and fully governed financial protocol
              engineered for long-term resilience.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Drop} alt="Drop" />
              Algorithmic Stability
            </div>
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Guardprotection} alt="Guardprotection" />
              Security Audits
            </div>
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Coin} alt="Coin" />
              Seigniorage Engine
            </div>
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Ticket} alt="Ticket" />
              Lottery
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Cloudaudit} alt="Drop" />
              Community Treasury
            </div>
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Gamecontroller} alt="Guardprotection" />
              DAO Governance
            </div>
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Burn} alt="Coin" />
              ncentivized Liquidity
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <div className="flex gap-2 items-center h-[86px] py-6 px-7 text-white rounded-xl bg-[#181817] border-[#FFFFFF0F] border-2">
              <Image src={Tree} alt="Ticket" />
              Ecosystem Expansion
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
