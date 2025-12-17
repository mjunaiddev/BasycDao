import React from "react";
import Image from "next/image";
import Frame32 from "@assets/frame-32.png";
const Faqs = () => {
  return (
    <div className=" bg-black">
      <Image className="w-full" src={Frame32} alt="frame32" />
      <div className="container">
        <div className="font-ChakraSemibold text-center text-white text-[64px] font-semibold pt-16 pb-14">
          FAQs
        </div>
        <div className="w-[970px] mx-auto text-white font-medium text-3xl pb-24">
          <div>
            <div className="border-t-2 border-[#FFFFFF0F] py-7 flex items-center justify-between">
              <span>
                Vorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
              <span className="text-4xl font-light text-white">x</span>
            </div>
            <div className="w-[875px] mt-4 mb-7 font-normal text-xl text-[#FFFFFF66]">
              Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </div>
          </div>
          <div className="border-t-2 border-[#FFFFFF0F] py-7 flex items-center justify-between">
            <span>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span className="text-5xl font-light">+</span>
          </div>

          <div className="border-t-2 border-[#FFFFFF0F] py-7 flex items-center justify-between">
            <span>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span className="text-5xl font-light">+</span>
          </div>
          <div className="border-y-2 border-[#FFFFFF0F] py-7 flex items-center justify-between">
            <span>
              Vorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <span className="text-5xl font-light">+</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
