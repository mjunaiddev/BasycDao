"use client";

import React, { useState } from "react";
import Image from "next/image";
import Frame32 from "@assets/frame-32.png";

const faqs = [
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
  {
    question: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="bg-black">
      <Image className="w-full" src={Frame32} alt="frame32" />

      <div className="container">
        {/* Heading */}
        <div className="font-ChakraSemibold text-center text-white text-[64px] font-semibold pt-16 pb-14">
          FAQs
        </div>

        {/* FAQ List */}
        <div className="w-[970px] mx-auto text-white font-medium text-3xl pb-24">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index}>
                {/* Question */}
                <div
                  onClick={() => toggleFaq(index)}
                  className="border-t-2 border-[#FFFFFF0F] py-7 flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span className="text-4xl font-light select-none">
                    {isOpen ? "×" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="w-[875px] mt-4 mb-7 font-normal text-xl text-[#FFFFFF66] transition-all duration-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {/* Bottom Border */}
          <div className="border-b-2 border-[#FFFFFF0F]" />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
