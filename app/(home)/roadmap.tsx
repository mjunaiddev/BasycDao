"use client";

import React, { useState } from "react";
import Image from "next/image";
import Frame33 from "@assets/frame-33.png";

const phases = [
  {
    title: "Foundation & Launch",
    points: [
      "BSYC token launch",
      "Staking and liquidity incentives activated",
      "Governance contract initialized",
      "Early governance participants onboarded",
    ],
  },
  {
    title: "Growth & Adoption",
    points: [
      "CEX listings",
      "Marketing campaigns",
      "Strategic partnerships",
      "Community expansion",
    ],
  },
  {
    title: "Ecosystem Expansion",
    points: [
      "New DeFi products",
      "Developer grants",
      "DAO tooling upgrades",
      "Cross-chain integrations",
    ],
  },
  {
    title: "Decentralization & Scale",
    points: [
      "Full DAO governance",
      "Treasury decentralization",
      "Protocol optimization",
      "Global expansion",
    ],
  },
];

const Roadmap = () => {
  const [activePhase, setActivePhase] = useState(0);

  return (
    <div id="roadmap">
      <Image className="w-full" src={Frame33} alt="frame33" />

      {/* Heading */}
      <div className="font-ChakraSemibold text-center text-black text-[64px] font-semibold pt-14 pb-14">
        Roadmap
      </div>

      {/* Phase Tabs */}
      <div className="flex justify-center gap-[60px] font-ChakraPetch font-medium text-3xl mb-7 relative">
        {phases.map((_, index) => (
          <span
            key={index}
            onClick={() => setActivePhase(index)}
            className={`cursor-pointer transition-colors ${
              activePhase === index ? "text-[#083ED2]" : "text-black"
            }`}
          >
            Phase {index + 1}
          </span>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="flex justify-center">
        <div className="relative w-[1020px] h-2 rounded-[10px] bg-[#0000000F]">
          <div
            className="absolute top-0 h-2 w-[175px] rounded-[10px] bg-[#083ED2] transition-all duration-500"
            style={{
              left: `${activePhase * 255}px`,
            }}
          />
        </div>
      </div>

      {/* Phase Content */}
      <div className="text-center pb-56">
        <div className="font-ChakraPetch font-semibold text-5xl mt-11 mb-4">
          {phases[activePhase].title}
        </div>

        <div className="text-[#11111166]">
          <ul className="list-disc list-inside">
            {phases[activePhase].points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
