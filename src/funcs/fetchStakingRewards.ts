import type { StakingRewardsResponse, MetricInfo } from "@/types";
import { VALUE_TYPE } from "@/types";

/**
 * 범위가 음수부터 양수까지 존재하는 경우에 대응하기 위해 대칭 로그 사용
 */
const symmetricLog = (x: number) => {
  if (x === 0) return 0;
  return Math.sign(x) * Math.log10(Math.abs(x) + 1);
};

/**
 * Staking Rewards API 요청 함수
 */
export const fetchStakingRewards = async (requestUrl: string): Promise<{ [metricKey: string]: MetricInfo } | undefined> => {
  try {
    const response = await fetch(requestUrl, {
      next: {
        revalidate: 0,
      },
    })
      .then((res) => res.json())
      .then((res): StakingRewardsResponse => res.data);

    const metricInfo: { [metricKey: string]: MetricInfo } = {};

    Object.keys(response).forEach((metricKeyWithPrefix) => {
      const ele = response[metricKeyWithPrefix][0];

      if (!ele || !ele.metrics || !ele.metrics[0]) return;

      const metricKey = ele.metrics[0].metricKey;
      const prefix = metricKeyWithPrefix.split("_")[0];

      if (!metricKey) return;

      if (!metricInfo[metricKey]) {
        metricInfo[metricKey] = {
          label: ele.metrics[0].label,
          metricKey: ele.metrics[0].metricKey,
          metrics: {},
        };
      }

      if (!metricInfo[metricKey].label && !!ele.metrics[0].label) {
        metricInfo[metricKey].label = ele.metrics[0].label;
      }

      switch (prefix) {
        case VALUE_TYPE.MINIMUM:
          metricInfo[metricKey].metrics[VALUE_TYPE.MINIMUM] = {
            logoUrl: ele.logoUrl,
            symbol: ele.symbol,
            value: ele.metrics[0].defaultValue,
          };
          break;
        case VALUE_TYPE.CURRENT:
          metricInfo[metricKey].changePercentages = JSON.parse(ele.metrics[0].changePercentages ?? "{}");
          metricInfo[metricKey].metrics[VALUE_TYPE.CURRENT] = {
            logoUrl: ele.logoUrl,
            symbol: ele.symbol,
            value: ele.metrics[0].defaultValue,
          };
          break;
        case VALUE_TYPE.MAXIMUM:
          metricInfo[metricKey].metrics[VALUE_TYPE.MAXIMUM] = {
            logoUrl: ele.logoUrl,
            symbol: ele.symbol,
            value: ele.metrics[0].defaultValue,
          };
          break;
      }
    });

    Object.keys(metricInfo).forEach((metricKey) => {
      if (Object.keys(metricInfo[metricKey]?.metrics).length === 3) {
        if (metricKey === "reward_stability_365d") {
          const max = Math.min(metricInfo[metricKey].metrics[VALUE_TYPE.MAXIMUM]!.value, 1);
          const min = metricInfo[metricKey].metrics[VALUE_TYPE.MINIMUM]!.value;
          const curr = metricInfo[metricKey].metrics[VALUE_TYPE.CURRENT]!.value;

          metricInfo[metricKey].marketPosition = ((curr - min) / (max - min)) * 100;
        } else if (metricInfo[metricKey].metrics[VALUE_TYPE.MAXIMUM]!.value - metricInfo[metricKey].metrics[VALUE_TYPE.MINIMUM]!.value > 200) {
          const max = symmetricLog(metricInfo[metricKey].metrics[VALUE_TYPE.MAXIMUM]!.value ?? 0);
          const min = symmetricLog(metricInfo[metricKey].metrics[VALUE_TYPE.MINIMUM]!.value ?? 0);
          const curr = symmetricLog(metricInfo[metricKey].metrics[VALUE_TYPE.CURRENT]!.value);

          metricInfo[metricKey].marketPosition = ((curr - min) / (max - min)) * 100;
        } else {
          const max = metricInfo[metricKey].metrics[VALUE_TYPE.MAXIMUM]!.value;
          const min = metricInfo[metricKey].metrics[VALUE_TYPE.MINIMUM]!.value;
          const curr = metricInfo[metricKey].metrics[VALUE_TYPE.CURRENT]!.value;

          metricInfo[metricKey].marketPosition = ((curr - min) / (max - min)) * 100;
        }
      }
    });

    return metricInfo;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
