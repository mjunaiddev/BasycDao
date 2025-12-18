"use client";

import { useState } from "react";
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

      <div className="container px-4">
        {/* Heading */}
        <div className="font-ChakraSemibold text-center text-white text-4xl md:text-[64px] font-semibold pt-16 pb-10 md:pb-14">
          FAQs
        </div>

        {/* FAQ List */}
        <div className="max-w-[970px] mx-auto text-white font-medium text-lg md:text-3xl pb-20 md:pb-24">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index}>
                {/* Question */}
                <div
                  onClick={() => toggleFaq(index)}
                  className="border-t-2 border-[#FFFFFF0F] py-5 md:py-7 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <span className="text-3xl md:text-4xl font-light select-none shrink-0">
                    {isOpen ? "×" : "+"}
                  </span>
                </div>

                {/* Answer */}
                {isOpen && (
                  <div className="mt-3 md:mt-4 mb-6 md:mb-7 font-normal text-base md:text-xl text-[#FFFFFF66] leading-relaxed">
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
