import React from "react";

const Claim = () => {
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
    <div className="container">
      <div className="font-ChakraPetch font-semibold text-[64px] text-[#083ED2] text-center">
        Claim Basyc Dao Staking Rewards
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex justify-between h-[182px] px-9 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col gap-3 justify-center">
            <div className="font-semibold text-3xl text-[#083ED2]">AMOUNT</div>
            <div className="font-Urbanist font-semibold text-[40px]">
              0.891723
            </div>
          </div>
          <button className="h-11 my-auto text-white font-medium text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-12">
            Claim
          </button>
        </div>
        <div className="h-[380px] border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#18181780] backdrop-blur-2xl text-white">
          <div className="flex flex-col h-full py-4">
            <div className="grid grid-cols-4 mx-8 items-center text-center bg-[#222222] rounded-lg backdrop-blur-[20px] py-4 font-semibold">
              <div>LOCK ID</div>
              <div>LOCKED AMOUNT</div>
              <div>TYPE</div>
              <div>ACTION</div>
            </div>
            <div
              className={`grid mx-8 text-center ${
                isScrollable
                  ? "overflow-y-auto flex-1 grid-rows-[repeat(auto-fill,minmax(70px,1fr))]"
                  : "grid-rows-[repeat(3,1fr)]"
              }`}
            >
              {rows.map((row, i) => (
                <div key={i} className="grid grid-cols-4 items-center py-2">
                  <div>{row.lockedid}</div>
                  <div>{row.lockedamount}</div>
                  <div>{row.type}</div>
                  <button className="border-2 border-[#083ED2] rounded-[10px] font-medium text-xl w-[135px] py-2 mx-auto">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Claim;
