"use client";
import { Dispatch, SetStateAction } from "react";
import clsx from "clsx";

interface TabsProps {
  selectedTab: string;
  setSelectedTab: Dispatch<SetStateAction<"general" | "risk" | "reward" | "momentum">>;
}

const defaultStyle = "grow-[1] flex justify-center items-center py-1 border-neutral-900 border-b transition-all duration-300";
const nonSelectedStyle = "text-neutral-100 bg-neutral-900";
const selectedStyle = "text-neutral-800 bg-transparent border-b-transparent";

export default function Tabs({ selectedTab, setSelectedTab }: TabsProps) {
  return (
    <div className="data-tab-section flex border-neutral-900 w-full">
      <button onClick={() => setSelectedTab("general")} className={clsx(defaultStyle, "border-r", selectedTab === "general" ? selectedStyle : nonSelectedStyle)}>
        General
      </button>
      <button onClick={() => setSelectedTab("risk")} className={clsx(defaultStyle, "border-r", selectedTab === "risk" ? selectedStyle : nonSelectedStyle)}>
        Risk
      </button>
      <button onClick={() => setSelectedTab("reward")} className={clsx(defaultStyle, "border-r", selectedTab === "reward" ? selectedStyle : nonSelectedStyle)}>
        Reward
      </button>
      <button onClick={() => setSelectedTab("momentum")} className={clsx(defaultStyle, selectedTab === "momentum" ? selectedStyle : nonSelectedStyle)}>
        Momentum
      </button>
    </div>
  );
}
