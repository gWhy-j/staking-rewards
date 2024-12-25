"use client";

import { MetricInfo, VALUE_TYPE } from "@/types";
import { Progress, Divider, Avatar } from "@nextui-org/react";
import { formatNumberWithUnit } from "@/funcs/formatter";
import Image from "next/image";

interface CardProps {
  isLast: boolean;
  data: MetricInfo;
}

export default function Card({ isLast, data: { label, metrics, metricKey, changePercentages, marketPosition } }: CardProps) {
  return (
    <div className="data-list flex flex-col items-center">
      <div className="flex flex-col justify-center w-full h-[5.5rem] px-4 gap-1">
        <div className="text-neutral-500 text-sm font-semibold">
          {label ??
            metricKey
              ?.split("_")
              .map((block: string) => block.charAt(0).toUpperCase() + block.slice(1))
              .join(" ")}
        </div>
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            {formatNumberWithUnit(metrics[VALUE_TYPE.CURRENT]?.value)}
            <span className="text-neutral-400 text-sm ml-2">{changePercentages?.["24h"] ? `(${formatNumberWithUnit(changePercentages["24h"])}%)` : ""}</span>
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Avatar className="w-3 h-3" src={metrics[VALUE_TYPE.MAXIMUM]?.logoUrl ?? ""} />
                  <span className="font-semibold text-sm">{metrics[VALUE_TYPE.MAXIMUM]?.symbol}</span>
                </div>
                <span className="text-neutral-400 font-semibold text-sm">{formatNumberWithUnit(metrics[VALUE_TYPE.MAXIMUM]?.value)}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 items-center">
                  <Avatar className="w-3 h-3" src={metrics[VALUE_TYPE.MINIMUM]?.logoUrl ?? ""} />
                  <span className="font-semibold text-sm">{metrics[VALUE_TYPE.MINIMUM]?.symbol}</span>
                </div>
                <span className="text-neutral-400 font-semibold text-sm">{formatNumberWithUnit(metrics[VALUE_TYPE.MINIMUM]?.value)}</span>
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Progress value={marketPosition ?? 0} className="w-full" size="sm" classNames={{ indicator: "bg-neutral-900" }} />
              <span className="absolute left-0 bottom-1.5 -translate-x-1/2 -translate-y-1/2">
                <div className="tooltip absolute left-1/2 -translate-x-1/2 -bottom-1" />
                <Avatar isBordered className="w-5 h-5" src={metrics[VALUE_TYPE.MINIMUM]?.logoUrl ?? ""} />
              </span>
              <span
                style={{
                  left: `${marketPosition ? marketPosition.toFixed(2) : 0}%`,
                }}
                className={`absolute bottom-1.5 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300`}
              >
                <div className="tooltip-amp absolute left-1/2 -translate-x-1/2 -bottom-1" />
                <Avatar
                  id="tooltip-amp"
                  isBordered
                  className="h-[1.3rem] w-[1.3rem] bg-white"
                  icon={
                    <Image
                      src={metrics[VALUE_TYPE.CURRENT]?.logoUrl ?? "https://www.stakingrewards.com/static/svg/icon-sr.svg"}
                      width={20.8}
                      height={20.8}
                      alt={metrics[VALUE_TYPE.CURRENT]?.symbol ?? "logo"}
                      className="!object-contain w-[1.3rem] h-[1.3rem]"
                    />
                  }
                />
              </span>
              <span className="absolute right-0 bottom-1.5 translate-x-1/2 -translate-y-1/2">
                <div className="tooltip absolute left-1/2 -translate-x-1/2 -bottom-1" />
                <Avatar isBordered className="w-5 h-5" src={metrics[VALUE_TYPE.MAXIMUM]?.logoUrl ?? ""} />
              </span>
            </div>
          </div>
        </div>
      </div>
      {!isLast && (
        <div className="w-full px-2">
          <Divider className="bg-neutral-400" />
        </div>
      )}
    </div>
  );
}
