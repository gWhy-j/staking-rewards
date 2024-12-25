"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { fetchStakingRewards } from "@/funcs/fetchStakingRewards";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function OverviewRadar({ assetName }: { assetName: string }) {
  const [render, setRender] = useState(false);
  const { data } = useQuery({
    queryKey: ["overview", assetName],
    queryFn: () => fetchStakingRewards(`/api/staking-rewards/overview?slug=${assetName}`),
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

  useEffect(() => {
    setRender(true);
  }, []);

  return (
    <div className="card-body min-w-[600px] min-h-[450px]">
      {render && chartData && (
        <>
          <ResponsiveContainer width={600} height={500}>
            <RadarChart cx="50%" cy="50%" outerRadius="90%" data={chartData} defaultShowTooltip={true}>
              <PolarGrid />
              <PolarRadiusAxis axisLine={false} tick={false} />
              <Radar dataKey="value" stroke="#000000" fill="#000000" fillOpacity={0.85} />
              <PolarAngleAxis
                dataKey="label"
                tick={({ payload, x, y }) => {
                  return (
                    <text x={x} y={y} textAnchor={"middle"} fontSize="16" fill="#a3a3a3" fontWeight="600" className="z-30">
                      {payload.value}
                    </text>
                  );
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  );
}
