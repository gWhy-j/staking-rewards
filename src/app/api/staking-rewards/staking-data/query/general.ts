export const general = `
query getStakingData($slug: String!) {
  min_price: assets(
    limit: 1
    where: {metrics: {metricKeys: ["price"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "price"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["price"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_price: assets(
    limit: 1
    where: {metrics: {metricKeys: ["price"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["price"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_price: assets(
    limit: 1
    where: {metrics: {metricKeys: ["price"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "price"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["price"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "marketcap"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "marketcap"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["marketcap"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_daily_trading_volume: assets(
    limit: 1
    where: {metrics: {metricKeys: ["daily_trading_volume"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "daily_trading_volume"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["daily_trading_volume"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_daily_trading_volume: assets(
    limit: 1
    where: {metrics: {metricKeys: ["daily_trading_volume"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["daily_trading_volume"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_daily_trading_volume: assets(
    limit: 1
    where: {metrics: {metricKeys: ["daily_trading_volume"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "daily_trading_volume"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["daily_trading_volume"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_net_staking_flow: assets(
    limit: 1
    where: {metrics: {metricKeys: ["net_staking_flow"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "net_staking_flow"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["net_staking_flow"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_net_staking_flow: assets(
    limit: 1
    where: {metrics: {metricKeys: ["net_staking_flow"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["net_staking_flow"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_net_staking_flow: assets(
    limit: 1
    where: {metrics: {metricKeys: ["net_staking_flow"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "net_staking_flow"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["net_staking_flow"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_inflation_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["inflation_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "inflation_rate"}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["inflation_rate"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_inflation_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["inflation_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["inflation_rate"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_inflation_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["inflation_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "inflation_rate"}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["inflation_rate"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_staked_tokens: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staked_tokens"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_staked_tokens: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_staked_tokens: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staked_tokens"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staked_tokens"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["staked_tokens"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
}
`;
