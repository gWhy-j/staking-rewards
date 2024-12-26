"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { fetchStakingRewards } from "@/funcs/fetchStakingRewards";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function OverviewRadar({ assetName }: { assetName: string }) {
  const { data } = useSuspenseQuery({
    queryKey: ["overview", assetName],
    queryFn: () => fetchStakingRewards(`${process.env.NEXT_PUBLIC_API_URL}/api/staking-rewards/overview?slug=${assetName}`),
  });

  const chartData = useMemo(() => {
    if (data) {
      return Object.values(data).map((ele) => ({
        label: ele.label?.replace(" 365d", "").replace(" USD", ""),
        value: ele.marketPosition,
        fullMark: 100,
      }));
    }
  }, [data]);

  return (
    <div className="card-body w-full h-full">
      {
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData} defaultShowTooltip={true}>
              <PolarGrid />
              <PolarRadiusAxis axisLine={false} tick={false} />
              <Radar dataKey="value" stroke="#000000" fill="#000000" fillOpacity={0.85} />
              <PolarAngleAxis
                dataKey="label"
                tick={({ payload, x, y, textAnchor }) => {
                  return (
                    <text x={x} y={y} textAnchor={textAnchor} fontSize="14" fill="#a3a3a3" fontWeight="600" className="z-30">
                      {payload.value}
                    </text>
                  );
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </>
      }
    </div>
  );
}
