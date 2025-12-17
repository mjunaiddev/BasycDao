import React from "react";
import Image from "next/image";
import Logo from "@assets/logo-footer.png";
import Xicon from "@assets/x-icon.png";
import Telegramicon from "@assets/telegram-icon.png";
import Etherscanicon from "@assets/etherscan-icon.png";
import Binanceicon from "@assets/binance-icon.png";
const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="text-white font-ChakraSemibold font-semibold text-[32px] text-center border-y-2 border-[#FFFFFF0F] py-4">
        CA: 0X000000000000000000000000000000000
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-11">
          <Image src={Logo} alt="logo" />
          <div className="text-white">All Rights Reserved 2025</div>
        </div>
        <div className="flex gap-5 w-[300px] ">
           <div className="border-y-2 border-[#FFFFFF0F] rounded-[10px] w-[60px] h-[60px]">
            <Image src={Xicon} alt="Xicon" />
          </div>
          <div className="border-y-2 border-[#FFFFFF0F] rounded-[10px] w-[60px] h-[60px]">
            <Image src={Telegramicon} alt="Telegram icon" />
          </div>
           <div className="border-y-2 border-[#FFFFFF0F] rounded-[10px] w-[60px] h-[60px]">
            <Image src={Etherscanicon} alt="Etherscan icon" />
          </div>
           <div className="border-y-2 border-[#FFFFFF0F] rounded-[10px] w-[60px] h-[60px]">
            <Image src={Binanceicon} alt="Binance icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
