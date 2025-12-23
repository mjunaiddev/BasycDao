"use client";

import TestModal from "@/src/components/modals/test-modal";
import React, { useState } from "react";

const Claim = () => {
  const [openModal, setOpenModal] = useState(false);

  const rows = [
    { lockedid: "$10", lockedamount: "5 DAYS", type: "ERC-20" },
    { lockedid: "$22", lockedamount: "3 DAYS", type: "ERC-20" },
    { lockedid: "$31", lockedamount: "1 DAY", type: "ERC-20" },
    { lockedid: "$10", lockedamount: "5 DAYS", type: "ERC-20" },
    { lockedid: "$22", lockedamount: "2 DAYS", type: "ERC-20" },
    { lockedid: "$31", lockedamount: "5 DAYS", type: "ERC-20" },
  ];

  const isScrollable = rows.length > 3;

  return (
    <div className=" w-full">
      {/* Heading */}
      <div className="font-ChakraPetch font-semibold text-3xl md:text-5xl lg:text-[64px] text-[#083ED2] text-center mb-9">
        Claim Basyc Dao Staking Rewards
      </div>

      <div className="flex flex-col gap-7">
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center justify-between h-auto lg:h-[182px] px-4 md:px-9 py-4 md:py-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col gap-3 justify-center text-center md:text-left">
            <div className="font-semibold text-2xl md:text-3xl text-[#083ED2]">
              AMOUNT
            </div>
            <div className="font-Urbanist font-semibold text-3xl md:text-[40px]">
              0.891723
            </div>
          </div>

          <button className="h-11 md:my-auto text-white font-medium text-lg md:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-10 md:px-12">
            Claim
          </button>
        </div>
        <div className="h-[380px] border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white overflow-hidden">
          {/* Horizontal scroll wrapper (mobile only) */}
          <div className="h-full overflow-x-auto md:overflow-x-visible">
            <div className="flex flex-col h-full py-4 min-w-[640px] md:min-w-0">
              <div className="grid grid-cols-4 mx-3 md:mx-8 items-center text-center bg-[#222222] rounded-lg backdrop-blur-[20px] py-3 md:py-4 font-semibold text-sm md:text-base">
                <div>LOCK ID</div>
                <div>LOCKED AMOUNT</div>
                <div>TYPE</div>
                <div>ACTION</div>
              </div>
              <div
                className={`grid mx-3 md:mx-8 text-center custom-scrollbar ${
                  isScrollable
                    ? "overflow-y-auto flex-1 grid-rows-[repeat(auto-fill,minmax(70px,1fr))]"
                    : "grid-rows-[repeat(3,1fr)]"
                }`}
              >
                {rows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-4 items-center py-2 text-sm md:text-base"
                  >
                    <div>{row.lockedid}</div>
                    <div>{row.lockedamount}</div>
                    <div>{row.type}</div>
                    <button
                      onClick={() => setOpenModal(true)}
                      className="border-2 border-[#083ED2] rounded-[10px] font-medium text-base md:text-xl w-[110px] md:w-[135px] py-1.5 md:py-2 mx-auto"
                    >
                      View
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md px-4">
          <TestModal onClose={() => setOpenModal(false)} />
        </div>
      )}
    </div>
  );
};

export default Claim;
