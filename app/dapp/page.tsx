"use client";

import React, { useState } from "react";
import Dappnavbar from "@/src/components/dapp-navbar";

import Treasury from "./treasury";
import Claim from "./claim";
import Withdraw from "./withdraw";
import Rewards from "./rewards";
import Stake from "./stake";
import Dashboard from "./dashboard";

type ViewType =
  | "dashboard"
  | "treasury"
  | "stake"
  | "claim"
  | "withdraw"
  | "rewards";

const Page = () => {
  const [activeView, setActiveView] = useState<ViewType>("treasury");

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />;
      case "treasury":
        return <Treasury />;
      case "stake":
        return <Stake />;
      case "claim":
        return <Claim />;
      case "withdraw":
        return <Withdraw />;
      case "rewards":
        return <Rewards />;
      default:
        return <Treasury />;
    }
  };

  return (
  <div className="fixed left-0 right-0 bg-cover bg-center bg-[#111111] bg-DappNavBg min-h-screen">
      <Dappnavbar activeView={activeView} setActiveView={setActiveView} />

      <div className="container pt-10">{renderView()}</div>
    </div>
  );
};

export default Page;
