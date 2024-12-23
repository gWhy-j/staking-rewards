export const query = `
query getProfileMetrics($slug: String!) {
  min_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_marketcap"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_marketcap"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_marketcap"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  min_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_ratio"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_staking_ratio: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_ratio"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_ratio"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_ratio"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  min_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "total_staking_wallets"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_total_staking_wallets: assets(
    limit: 1
    where: {metrics: {metricKeys: ["total_staking_wallets"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "total_staking_wallets"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  min_fee_revenue: assets(
    limit: 1
    where: {metrics: {metricKeys: ["fee_revenue"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "fee_revenue"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["fee_revenue"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_fee_revenue: assets(
    limit: 1
    where: {metrics: {metricKeys: ["fee_revenue"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["fee_revenue"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_fee_revenue: assets(
    limit: 1
    where: {metrics: {metricKeys: ["fee_revenue"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "fee_revenue"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["fee_revenue"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  min_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "circulating_percentage"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["circulating_percentage"]}
      showAll: true
    ) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["circulating_percentage"]}
      showAll: true
    ) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_circulating_percentage: assets(
    limit: 1
    where: {metrics: {metricKeys: ["circulating_percentage"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "circulating_percentage"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["circulating_percentage"]}
      showAll: true
    ) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  min_staking_risk_rating: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_risk_rating"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_risk_rating"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_risk_rating"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_staking_risk_rating: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_risk_rating"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_risk_rating"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  max_staking_risk_rating: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_risk_rating"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_risk_rating"}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["staking_risk_rating"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
  current_performance: assets(
    limit: 1
    where: {metrics: {metricKeys: ["performance"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    id
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["performance"]}, showAll: true) {
      id
      label
      tooltip
      metricKey
      defaultValue
      changePercentages
      changeAbsolutes
      createdAt
      unit
      variation
      approvedHistorical
    }
  }
}
`;
