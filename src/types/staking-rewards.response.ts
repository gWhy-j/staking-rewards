export interface Asset {
  logoUrl: string | null;
  symbol: string;
  metrics: Metric[];
}

interface Metric {
  label: string | null;
  metricKey: string | null;
  defaultValue: number;
  changePercentages: string | null;
}

export type StakingRewardsResponse = { [metricKeyWithPrefix: string]: Asset[] };
