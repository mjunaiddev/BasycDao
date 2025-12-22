import React from "react";

const TestModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="relative w-full max-w-[880px] border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817E6] backdrop-blur-2xl text-white px-4 md:px-6 lg:px-8 py-4 md:py-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 md:top-6 right-4 md:right-6 text-[#083ED2] text-xl"
      >
        ✕
      </button>

      {/* Content */}
      <div className="flex flex-col gap-6 w-full max-w-[765px] mx-auto mb-6 md:mb-8 mt-10 md:mt-14">
        {/* Top info */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between text-center md:text-left">
          <div>
            <span className="font-semibold text-xs md:text-sm uppercase text-[#083ED2]">
              NEXT UNLOCK IN :
            </span>{" "}
            <span className="text-white text-base md:text-lg uppercase font-normal">
              00:00:00
            </span>
          </div>
          <div>
            <span className="font-semibold text-xs md:text-sm uppercase text-[#083ED2]">
              TOTAL CLAIMED :
            </span>{" "}
            <span className="text-white text-base md:text-lg uppercase font-normal">
              100ETH ($12)
            </span>
          </div>
        </div>

        {/* Details box */}
        <div className="border-2 border-[#083ED2] rounded-[10px] px-4 md:px-6 lg:px-10 py-5 md:py-6 lg:py-7">
          <div className="flex justify-between mb-4 md:mb-6 text-base md:text-lg lg:text-xl font-semibold">
            <span className="text-[#083ED2]">Lock ID:</span>
            <span className="text-white break-all">0808849441</span>
          </div>
          <div className="flex justify-between mb-4 md:mb-6 text-base md:text-lg lg:text-xl font-semibold">
            <span className="text-[#083ED2]">Locked Amount:</span>
            <span className="text-white">0.0787</span>
          </div>
          <div className="flex justify-between mb-0 text-base md:text-lg lg:text-xl font-semibold">
            <span className="text-[#083ED2]">
              Amount Available for Unlock:
            </span>
            <span className="text-white">0.0787</span>
          </div>
        </div>
      </div>

      {/* Action */}
      <div className="flex justify-center">
        <button className="text-white font-medium text-base md:text-lg lg:text-xl bg-[#083ED2] border-[#0000001C] border-2 rounded-[10px] px-8 md:px-12 lg:px-14 py-2.5 md:py-3">
          Claim (90 ERT)
        </button>
      </div>
    </div>
  );
};

export default TestModal;
