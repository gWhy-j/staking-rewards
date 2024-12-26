"use client";

import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import PerformanceLineChart from "../elements/PerformanceLineChart";
import ClientContent from "@/app/layout/ClientContent";
import Loading from "../elements/Loading";
const categories = ["price", "staked_tokens", "reward_rate", "inflation_rate"];

export default function ChartWrapper({ assetName }: { assetName: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["performance-chart", assetName],
    queryFn: () =>
      fetch(`/api/staking-rewards/performance-chart?slug=${assetName}`)
        .then((res) => res.json())
        .then((data) => data.data?.assets[0]?.metrics),
  });

  const lines = useMemo(() => {
    if (!data) return [];
    return categories.map((category: string) => data.filter((ele: { [key: string]: number | string | null }) => ele?.metricKey === category));
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col gap-4 px-3 max-lg:overflow-x-hidden pb-12">
      <ClientContent loading={<Loading />}>
        {isLoading ? (
          <Loading />
        ) : (
          lines.map((line) => {
            return <PerformanceLineChart key={line[0].metricKey} data={line} />;
          })
        )}
      </ClientContent>
    </div>
  );
}
