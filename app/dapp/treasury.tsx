import React from "react";
import Image from "next/image";
import Nodataimg from "@assets/treasury-img.png";

const Treasury = () => {
  const rows = [
    { trade: "$0", price: "$0", amount: 10, eth: 10, balance: 10 },
    { trade: "$0.00", price: "$0.00", amount: 20, eth: 20, balance: 20 },
    { trade: "$0.00", price: "$0.00", amount: 30, eth: 30, balance: 30 },
    { trade: "$0", price: "$0", amount: 10, eth: 10, balance: 10 },
    { trade: "$0.00", price: "$0.00", amount: 20, eth: 20, balance: 20 },
    { trade: "$0.00", price: "$0.00", amount: 30, eth: 30, balance: 30 },
    { trade: "$1.00", price: "$1.00", amount: 40, eth: 40, balance: 40 },
    { trade: "$0", price: "$0", amount: 10, eth: 10, balance: 10 },
    { trade: "$0.00", price: "$0.00", amount: 20, eth: 20, balance: 20 },
    { trade: "$0.00", price: "$0.00", amount: 30, eth: 30, balance: 30 },
    { trade: "$0", price: "$0", amount: 10, eth: 10, balance: 10 },
    { trade: "$0.00", price: "$0.00", amount: 20, eth: 20, balance: 20 },
    { trade: "$0.00", price: "$0.00", amount: 30, eth: 30, balance: 30 },
    { trade: "$1.00", price: "$1.00", amount: 40, eth: 40, balance: 40 },
  ];

  // Check if rows exceed 6
  const isScrollable = rows.length > 6;

  return (
    <div className="container">
      <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center">
        Treasury activity
      </div>
      <div className="h-[478px] border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
        <div className="flex flex-col h-full py-4">
          <div className="grid grid-cols-6 mx-8 items-center text-center bg-[#222222] rounded-lg backdrop-blur-[20px] py-4 font-semibold">
            <div>TRADE</div>
            <div>PRICE</div>
            <div>AMOUNT</div>
            <div>ETH BALANCE</div>
            <div>BALANCE</div>
            <div>TXN ID</div>
          </div>
          <div
            className={`grid mx-8 text-center ${
              isScrollable
                ? "overflow-y-auto flex-1 grid-rows-[repeat(auto-fill,minmax(70px,1fr))]"
                : "grid-rows-[repeat(6,1fr)]"
            }`}
          >
            {rows.length > 0 ? (
              rows.map((row, i) => (
                <div key={i} className="grid grid-cols-6 items-center py-2">
                  <div>{row.trade}</div>
                  <div>{row.price}</div>
                  <div>{row.amount}</div>
                  <div>{row.eth}</div>
                  <div>{row.balance}</div>
                  <div className="text-[#083ED2]">0x14...123</div>
                </div>
              ))
            ) : (
              <div className="col-span-6 flex justify-center items-center min-h-[400px] my-auto">
                <Image src={Nodataimg} alt="No data found" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treasury;
