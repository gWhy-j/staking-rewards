"use client";

import { formatNumberWithUnit } from "@/funcs/formatter";
import { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function PerformanceLineChart({
  data,
}: {
  data: {
    metricKey: string;
    defaultValue: number;
    createdAt: string;
  }[];
}) {
  const chartData = useMemo(() => {
    return data.map((ele) => ({ ...ele, createdAt: ele.createdAt.split("T")[0] }));
  }, [data]);

  return (
    <div className="flex flex-col gap-2">
      <div className="font-semibold text-neutral-500">- {data[0].metricKey.split("_").join(" ").charAt(0).toUpperCase() + data[0].metricKey.split("_").join(" ").slice(1)}</div>
      <div className="w-full pl-0">
        <ResponsiveContainer width="100%" height={170}>
          <LineChart
            width={500}
            height={170}
            data={chartData}
            syncId="performance-chart"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="createdAt"
              tick={({ payload, x, y, textAnchor }) => {
                return (
                  <text x={x} y={y + 10} textAnchor={textAnchor} fontSize="13" fill="#a3a3a3" fontWeight="600">
                    {payload.value}
                  </text>
                );
              }}
            />
            <YAxis
              domain={([dataMin, dataMax]) => {
                const diff = dataMax - dataMin;
                return [dataMin - diff / 4, dataMax + diff / 4];
              }}
              tick={({ payload, x, y, textAnchor }) => {
                return (
                  <text x={x} y={y} textAnchor={textAnchor} fontSize="13" fill="#a3a3a3" fontWeight="600">
                    {formatNumberWithUnit(Number(payload.value))}
                  </text>
                );
              }}
            />
            <Tooltip labelStyle={{ fontSize: 13 }} contentStyle={{ fontSize: 14 }} formatter={(value) => formatNumberWithUnit(Number(value))} />
            <Line type="natural" dataKey="defaultValue" stroke="#525252" fill="#ffffff" strokeWidth={2} dot={false} name={data[0].metricKey} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
