"use client";

import { useState, Suspense } from "react";
import { ScrollShadow } from "@nextui-org/react";
import Tabs from "../elements/Tabs";
import Loading from "../elements/Loading";
import CardWrapper from "./CardWrapper";

export default function Content({ assetName }: { assetName: string }) {
  const [selectedTab, setSelectedTab] = useState<"general" | "risk" | "reward" | "momentum">("general");

  return (
    <div className="card-body border-t border-neutral-900 flex flex-col">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ScrollShadow className="w-[700px] h-[400px]">
        <Suspense fallback={<Loading />}>{<CardWrapper assetName={assetName} selectedTab={selectedTab} />}</Suspense>
      </ScrollShadow>
    </div>
  );
}
