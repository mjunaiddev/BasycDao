import React from "react";
import Image from "next/image";
import LoaderRing from "@assets/loader-ring.png";
import LoaderLogo from "@assets/loader-logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-[2px]">
      <div className="relative w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center">
        {/* Rotating Blue Gradient Ring */}
        <div className="absolute inset-0 animate-spin [animation-duration:1.5s]">
          <Image
            src={LoaderRing}
            alt="Loader Ring"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="relative top-3 w-[90px] h-[90px]">
          <Image
            src={LoaderLogo}
            alt="Loader Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
