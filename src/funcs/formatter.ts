export const formatNumberWithUnit = (value: number | undefined): string => {
  if (!value) return "0";
  if (value >= 1000000000) {
    return `${(value / 1000000000).toFixed(2)}b`;
  } else if (value >= 1000000) {
    return `${(value / 1000000).toFixed(2)}m`;
  } else if (value >= 1000) {
    return `${(value / 1000).toFixed(2)}k`;
  } else if (value <= -1000000000) {
    return `${(value / 1000000000).toFixed(2)}b`;
  } else if (value <= -1000000) {
    return `${(value / 1000000).toFixed(2)}m`;
  } else if (value <= -1000) {
    return `${(value / 1000).toFixed(2)}k`;
  }
  return value.toFixed(2);
};
