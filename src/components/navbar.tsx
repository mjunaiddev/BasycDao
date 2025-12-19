"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "@assets/logo.png";
import Signout from "@assets/sign-out.png";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="bg-NavBg bg-cover w-full border-b-2">
      <div className="container flex items-center justify-between h-[100px]">
        {/* Logo */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <Image src={Logo} alt="Logo" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-7 items-center">
          {[
            ["Home", "home"],
            ["Features", "features"],
            ["About Us", "about"],
            ["Roadmap", "roadmap"],
            ["Tokenomics", "tokenomics"],
            ["FAQs", "faqs"],
          ].map(([label, id]) => (
            <li
              key={id}
              onClick={() => scrollToSection(id)}
              className="cursor-pointer hover:text-gray-500"
            >
              {label}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link href={"/dapp"}>
            <button className="flex items-center gap-2 px-7 py-4 rounded-xl text-white bg-black">
              <Image src={Signout} alt="Signout" />
              Launch App
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black">
          <ul className="flex flex-col gap-6 px-6 py-8">
            {[
              ["Home", "home"],
              ["Features", "features"],
              ["About Us", "about"],
              ["Roadmap", "roadmap"],
              ["Tokenomics", "tokenomics"],
              ["FAQs", "faqs"],
            ].map(([label, id]) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className="cursor-pointer text-xl border-b border-black/10 pb-3"
              >
                {label}
              </li>
            ))}

            {/* Mobile Launch App Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white bg-black"
            >
              <Image src={Signout} alt="Signout" />
              Launch App
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
