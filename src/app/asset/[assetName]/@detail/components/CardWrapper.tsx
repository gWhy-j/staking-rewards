"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchStakingRewards } from "@/funcs/fetchStakingRewards";
import Card from "../elements/Card";

export default function CardWrapper({ assetName, selectedTab }: { assetName: string; selectedTab: string }) {
  const { data } = useQuery({
    queryKey: ["staking-data", assetName, selectedTab],
    queryFn: () => fetchStakingRewards(`/api/staking-rewards/staking-data?slug=${assetName}&tab=${selectedTab}`),
  });

  return <>{data && Object.values(data).map((metric, idx) => <Card key={metric.metricKey} isLast={idx === Object.values(data).length - 1} data={metric} />)}</>;
}
