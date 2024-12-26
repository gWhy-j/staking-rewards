"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchStakingRewards } from "@/funcs/fetchStakingRewards";
import Card from "../elements/Card";
import Loading from "../elements/Loading";
import ClientContent from "@/app/layout/ClientContent";

export default function CardWrapper({ assetName, selectedTab }: { assetName: string; selectedTab: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["staking-data", assetName, selectedTab],
    queryFn: () => fetchStakingRewards(`/api/staking-rewards/staking-data?slug=${assetName}&tab=${selectedTab}`),
  });

  return <ClientContent loading={<Loading />}>{isLoading ? <Loading /> : Object.values(data ?? {}).map((metric) => <Card key={metric.metricKey} data={metric} />)}</ClientContent>;
}
