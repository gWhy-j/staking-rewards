"use client";

import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import Tabs from "../elements/Tabs";
import CardWrapper from "./CardWrapper";

export default function Content({ assetName }: { assetName: string }) {
  const [selectedTab, setSelectedTab] = useState<"general" | "risk" | "reward" | "momentum">("general");

  return (
    <div className="card-body border-t border-neutral-900 flex flex-col">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ScrollShadow>{<CardWrapper assetName={assetName} selectedTab={selectedTab} />}</ScrollShadow>
    </div>
  );
}
