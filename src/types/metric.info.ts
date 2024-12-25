export enum VALUE_TYPE {
  MINIMUM = "min",
  CURRENT = "current",
  MAXIMUM = "max",
}

export interface MetricInfo {
  label: string | null;
  metricKey: string | null;
  metrics: {
    [key in VALUE_TYPE]?: {
      logoUrl: string | null;
      symbol: string;
      value: number;
    };
  };
  changePercentages?: {
    [key: string]: number;
  } | null;
  marketPosition?: number;
}
