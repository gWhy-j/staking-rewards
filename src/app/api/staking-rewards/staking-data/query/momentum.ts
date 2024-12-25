export const momentum = `
query getStakingData($slug: String!) {
  min_staked_tokens_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staked_tokens_trend_24h"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_staked_tokens_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_staked_tokens_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staked_tokens_trend_24h"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_trading_volume_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["trading_volume_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "trading_volume_trend_24h"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["trading_volume_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_trading_volume_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["trading_volume_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["trading_volume_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_trading_volume_trend_24h: assets(
    limit: 1
    where: {metrics: {metricKeys: ["trading_volume_trend_24h"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "trading_volume_trend_24h"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["trading_volume_trend_24h"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_page_views_trend: assets(
    limit: 1
    where: {metrics: {metricKeys: ["page_views_trend"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "page_views_trend"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["page_views_trend"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_page_views_trend: assets(
    limit: 1
    where: {metrics: {metricKeys: ["page_views_trend"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["page_views_trend"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_page_views_trend: assets(
    limit: 1
    where: {metrics: {metricKeys: ["page_views_trend"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "page_views_trend"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["page_views_trend"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
}
`;
