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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (menu: "dashboard" | "stake") => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const activeClass = "text-[#083ED2]";
  const defaultClass = "text-white hover:text-[#083ED2]";

  return (
    <nav className="w-full px-6 md:px-10 relative z-50">
      <div className="container mx-auto flex items-center justify-between h-[100px]">
        {/* Logo */}
        <div className="cursor-pointer">
          <Link href="/">
          <div className="cursor-pointer">
            <Image src={Logo} alt="Logo" className="w-[140px] h-auto" />
          </div>
        </Link>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-14 px-8 py-3 text-2xl text-white font-Exo font-medium border-2 border-[#FFFFFF0F] rounded-[20px] bg-[#181817]">
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
        <button className="hidden md:block font-medium text-white text-xl border-2 border-[#083ED2] rounded-xl px-8 py-3">
          0x00000...
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? "X" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 border-t-2 border-[#FFFFFF0F] pt-4">
          <div className="flex flex-col gap-4 text-white font-medium text-lg">
            {/* Dashboard */}
            <div>
              <div
                onClick={() => toggleMenu("dashboard")}
                className="flex items-center justify-between cursor-pointer"
              >
                Dashboard
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform ${
                    openMenu === "dashboard" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openMenu === "dashboard" && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  <div
                    onClick={() => {
                      setActiveView("dashboard");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "dashboard" ? activeClass : defaultClass
                    }`}
                  >
                    Dashboard
                  </div>
                  <div
                    onClick={() => {
                      setActiveView("treasury");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "treasury" ? activeClass : defaultClass
                    }`}
                  >
                    Treasury
                  </div>
                </div>
              )}
            </div>

            {/* Stake */}
            <div>
              <div
                onClick={() => toggleMenu("stake")}
                className="flex items-center justify-between cursor-pointer"
              >
                Stake
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform ${
                    openMenu === "stake" ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openMenu === "stake" && (
                <div className="mt-2 flex flex-col gap-2 pl-4">
                  <div
                    onClick={() => {
                      setActiveView("stake");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "stake" ? activeClass : defaultClass
                    }`}
                  >
                    Stake
                  </div>
                  <div
                    onClick={() => {
                      setActiveView("claim");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "claim" ? activeClass : defaultClass
                    }`}
                  >
                    Claim
                  </div>
                  <div
                    onClick={() => {
                      setActiveView("withdraw");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "withdraw" ? activeClass : defaultClass
                    }`}
                  >
                    Withdraw
                  </div>
                  <div
                    onClick={() => {
                      setActiveView("rewards");
                      setOpenMenu(null);
                      setMobileMenuOpen(false);
                    }}
                    className={`${
                      activeView === "rewards" ? activeClass : defaultClass
                    }`}
                  >
                    Rewards
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Wallet */}
            <button className="mt-4 font-medium text-white text-lg border-2 border-[#083ED2] rounded-xl px-6 py-2">
              0x00000...
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Dappnavbar;
