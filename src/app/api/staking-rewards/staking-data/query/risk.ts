export const risk = `
query getStakingData($slug: String!) {
  min_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_marketcap"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_marketcap"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_ratio"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_ratio"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "total_staking_wallets"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "total_staking_wallets"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "circulating_percentage"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["circulating_percentage"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["circulating_percentage"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "circulating_percentage"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["circulating_percentage"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
}
`;
