"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from "@assets/logo-dapp.png";
import Link from "next/link";

type ViewType =
  | "dashboard"
  | "treasury"
  | "stake"
  | "claim"
  | "withdraw"
  | "rewards";

interface Props {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
}

const Dappnavbar = ({ activeView, setActiveView }: Props) => {
  const [openMenu, setOpenMenu] = useState<null | "dashboard" | "stake">(null);

  const toggleMenu = (menu: "dashboard" | "stake") => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const activeClass = "text-[#083ED2]";
  const defaultClass = "text-white hover:text-[#083ED2]";

  return (
    <div className="container flex items-center justify-between h-[100px] relative">
      {/* Logo */}
      <div className="cursor-pointer">
        <Link href={"/"}>
        <Image src={Logo} alt="Logo" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex gap-14 px-8 py-3 text-2xl text-white font-Exo font-medium border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817] relative">

        {/* Dashboard */}
        <div className="relative">
          <div
            onClick={() => toggleMenu("dashboard")}
            className="flex items-center gap-1 cursor-pointer"
          >
            Dashboard
            <RiArrowDropDownLine
              className={`text-3xl transition-transform ${
                openMenu === "dashboard" ? "rotate-180" : ""
              }`}
            />
          </div>

          {openMenu === "dashboard" && (
            <div className="absolute top-14 left-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817] px-4 py-3 w-[180px] shadow-xl z-50">
               <div
                onClick={() => {
                  setActiveView("dashboard");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "dashboard" ? activeClass : defaultClass
                }`}
              >
                Dashboard
              </div>
              <div
                onClick={() => {
                  setActiveView("treasury");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "treasury" ? activeClass : defaultClass
                }`}
              >
                Treasury
              </div>
            </div>
          )}
        </div>

        {/* Stake */}
        <div className="relative">
          <div
            onClick={() => toggleMenu("stake")}
            className="flex items-center gap-1 cursor-pointer"
          >
            Stake
            <RiArrowDropDownLine
              className={`text-3xl transition-transform ${
                openMenu === "stake" ? "rotate-180" : ""
              }`}
            />
          </div>

          {openMenu === "stake" && (
            <div className="absolute top-14 left-0 border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817] px-4 py-3 w-[180px] shadow-xl z-50 space-y-2">
              <div
                onClick={() => {
                  setActiveView("stake");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "stake" ? activeClass : defaultClass
                }`}
              >
                Stake
              </div>
              <div
                onClick={() => {
                  setActiveView("claim");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "claim" ? activeClass : defaultClass
                }`}
              >
                Claim
              </div>

              <div
                onClick={() => {
                  setActiveView("withdraw");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "withdraw" ? activeClass : defaultClass
                }`}
              >
                Withdraw
              </div>

              <div
                onClick={() => {
                  setActiveView("rewards");
                  setOpenMenu(null);
                }}
                className={`cursor-pointer text-lg font-medium transition ${
                  activeView === "rewards" ? activeClass : defaultClass
                }`}
              >
                Rewards
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Wallet Button */}
      <button className="font-medium text-white text-xl border-2 border-[#083ED2] rounded-xl px-14 py-4">
        0x00000...
      </button>
    </div>
  );
};

export default Dappnavbar;
