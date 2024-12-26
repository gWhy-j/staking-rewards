"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchStakingRewards } from "@/funcs/fetchStakingRewards";
import Card from "../elements/Card";

export default function CardWrapper({ assetName, selectedTab }: { assetName: string; selectedTab: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["staking-data", assetName, selectedTab],
    queryFn: () => fetchStakingRewards(`${process.env.NEXT_PUBLIC_API_URL}/api/staking-rewards/staking-data?slug=${assetName}&tab=${selectedTab}`),
  });

  return <>{data && Object.values(data).map((metric, idx) => <Card key={metric.metricKey} isLast={idx === Object.values(data).length - 1} data={metric} />)}</>;
}
