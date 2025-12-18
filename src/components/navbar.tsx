"use client";
import React from "react";
import Logo from "@assets/logo.png";
import Signout from "@assets/sign-out.png";
import Image from "next/image";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="bg-NavBg bg-cover w-full h-[100px] border-b-2">
      <div className="flex items-center justify-between container py-5">
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <Image src={Logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex gap-7 items-center">
            <li
              onClick={() => scrollToSection("home")}
              className="cursor-pointer hover:text-gray-500"
            >
              Home
            </li>
            <li
              onClick={() => scrollToSection("features")}
              className="cursor-pointer hover:text-gray-500"
            >
              Features
            </li>
            <li
              onClick={() => scrollToSection("about")}
              className="cursor-pointer hover:text-gray-500"
            >
              About Us
            </li>
            <li
              onClick={() => scrollToSection("roadmap")}
              className="cursor-pointer hover:text-gray-500"
            >
              Roadmap
            </li>
            <li
              onClick={() => scrollToSection("tokenomics")}
              className="cursor-pointer hover:text-gray-500"
            >
              Tokenomics
            </li>
            <li
              onClick={() => scrollToSection("faqs")}
              className="cursor-pointer hover:text-gray-500"
            >
              FAQs
            </li>
          </ul>
        </div>
        <div>
          <button className="flex items-center gap-2 px-7 py-4 rounded-xl text-white bg-black">
            <Image src={Signout} alt="Signout" />
            Launch App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
