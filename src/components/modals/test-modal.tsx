import React from "react";

const TestModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative w-[880px] border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817E6] backdrop-blur-2xl text-white px-8 py-6">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-[#083ED2] text-xl"
      >
        ✕
      </button>
      <div className="flex flex-col gap-6 w-[765px] mx-auto mb-8 mt-14">
        <div className="flex justify-between">
          <div>
            <span className="font-semibold text-sm uppercase text-[#083ED2]">
              NEXT UNLOCK IN :  
            </span>
            <span className="text-white text-lg uppercase font-normal">
              00:00:00
            </span>
          </div>
          <div>
            <span className="font-semibold text-sm uppercase text-[#083ED2]">
              TOTAL CLAIMED : 
            </span>
            <span className="text-white text-lg uppercase font-normal">
              100ETH ($12)
            </span>
          </div>
        </div>

        <div className="border-2 border-[#083ED2] rounded-[10px] px-10 py-7">
          <div className="flex justify-between mb-6 text-xl font-semibold">
            <span className="text-[#083ED2]">Lock ID:</span>
            <span className="text-white">0808849441</span>
          </div>
          <div className="flex justify-between mb-6 text-xl font-semibold">
            <span className="text-[#083ED2]">Locked Amount:</span>
            <span className="text-white">0.0787</span>
          </div>
          <div className="flex justify-between mb-6 text-xl font-semibold">
            <span className="text-[#083ED2]">Amount Available for Unlock:</span>
            <span className="text-white">0.0787</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="text-white font-medium text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-14 py-3">
          Claim (90 ERT)
        </button>
      </div>
    </div>
  );
};

export default TestModal;
