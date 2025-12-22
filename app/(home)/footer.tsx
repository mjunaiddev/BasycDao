import React from "react";
import Image from "next/image";
import Logo from "@assets/logo-footer.png";
import Xicon from "@assets/x-icon.png";
import Telegramicon from "@assets/telegram-icon.png";
import Etherscanicon from "@assets/etherscan-icon.png";
import Binanceicon from "@assets/binance-icon.png";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* Contract Address */}
      <div className="text-white font-ChakraSemibold font-semibold text-[32px] text-center border-y-2 border-[#FFFFFF0F] py-4 px-4 break-all">
        CA: 0X000000000000000000000000000000000
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-6 md:px-12 py-8">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-11 text-center md:text-left">
          <Image src={Logo} alt="logo" />
          <div className="text-white text-sm md:text-base">
            All Rights Reserved © 2025
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 md:gap-5 flex-wrap justify-center md:justify-end">
          {[
            { icon: Xicon, alt: "X icon" },
            { icon: Telegramicon, alt: "Telegram icon" },
            { icon: Etherscanicon, alt: "Etherscan icon" },
            { icon: Binanceicon, alt: "Binance icon" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center border border-[#FFFFFF0F] rounded-[10px] w-[52px] h-[52px] md:w-[60px] md:h-[60px] cursor-pointer"
            >
              <Image src={item.icon} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
