import React from "react";
import Logo from "@assets/logo.png";
import Signout from "@assets/sign-out.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container py-5">
      <div>
        <Image src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex gap-7 items-center">
          <li>Home</li>
          <li>Features</li>
          <li>About Us</li>
          <li>Roadmap</li>
          <li>Tokenomics</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div>
        <button className="flex items-center gap-2 px-7 py-4 rounded-xl text-white bg-black">
          <Image src={Signout} alt="Signout" />
          Launch App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
