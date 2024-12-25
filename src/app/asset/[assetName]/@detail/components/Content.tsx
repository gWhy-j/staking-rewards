"use client";

import { useState, Suspense, useEffect } from "react";
import { ScrollShadow } from "@nextui-org/react";
import Tabs from "../elements/Tabs";
import Loading from "../elements/Loading";
import CardWrapper from "./CardWrapper";

export default function Content({ assetName }: { assetName: string }) {
  const [selectedTab, setSelectedTab] = useState<"general" | "risk" | "reward" | "momentum">("general");
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="card-body min-w-[600px] border-t border-neutral-900 flex flex-col">
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ScrollShadow className="w-[600px] h-[500px]">
        <Suspense fallback={<Loading />}>{render && <CardWrapper assetName={assetName} selectedTab={selectedTab} />}</Suspense>
      </ScrollShadow>
    </div>
  );
}
