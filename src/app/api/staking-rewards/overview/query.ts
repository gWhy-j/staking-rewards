export const query = `
query getStakingData($slug: String!) {
  min_staking_marketcap: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_marketcap"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_marketcap"}
  ) {
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
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
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["total_staking_wallets"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_annualized_rewards_usd: assets(
    limit: 1
    where: {metrics: {metricKeys: ["annualized_rewards_usd"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "annualized_rewards_usd"}
  ) {
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["annualized_rewards_usd"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_annualized_rewards_usd: assets(
    limit: 1
    where: {metrics: {metricKeys: ["annualized_rewards_usd"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["annualized_rewards_usd"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_annualized_rewards_usd: assets(
    limit: 1
    where: {metrics: {metricKeys: ["annualized_rewards_usd"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "annualized_rewards_usd"}
  ) {
    slug
    logoUrl
    name
    metrics(limit: 1, where: {metricKeys: ["annualized_rewards_usd"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_reward_stability_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_stability_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "reward_stability_365d"}
  ) {
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["reward_stability_365d"]}

    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_reward_stability_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_stability_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["reward_stability_365d"]}
  
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_reward_stability_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_stability_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "reward_stability_365d"}
  ) {
    slug
    logoUrl
    name
    metrics(
      limit: 1
      where: {metricKeys: ["reward_stability_365d"]}
  
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
}
`;
