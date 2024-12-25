export const reward = `
query getStakingData($slug: String!) {
  min_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "reward_rate"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_rate"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_rate"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "reward_rate"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_rate"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_real_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["real_reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "real_reward_rate"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["real_reward_rate"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_real_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["real_reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["real_reward_rate"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_real_reward_rate: assets(
    limit: 1
    where: {metrics: {metricKeys: ["real_reward_rate"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "real_reward_rate"}
  ) {
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["real_reward_rate"]}) {
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
    logoUrl
    symbol
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
    logoUrl
    symbol
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
    logoUrl
    symbol
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
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_stability_365d"]}) {
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
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_stability_365d"]}) {
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
    logoUrl
    symbol
    metrics(limit: 1, where: {metricKeys: ["reward_stability_365d"]}) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  min_staking_roi_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_roi_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_asc: "staking_roi_365d"}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["staking_roi_365d"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  current_staking_roi_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_roi_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, slugs: [$slug]}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["staking_roi_365d"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
  max_staking_roi_365d: assets(
    limit: 1
    where: {metrics: {metricKeys: ["staking_roi_365d"]}, isLaunched: true, underMaintenance: false, excludeFromRanking: false, tags: {tagKeys: ["all", "proof-of-stake", "liquid-staking", "actively-validated-service", "stablecoin", "bitcoin-and-others", "ethereum-ecosystem", "cosmos-ecosystem", "polkadot-ecosystem", "binance-smart-chain-ecosystem"]}}
    order: {metricKey_desc: "staking_roi_365d"}
  ) {
    logoUrl
    symbol
    metrics(
      limit: 1
      where: {metricKeys: ["staking_roi_365d"]}
      showAll: true
    ) {
      label
      metricKey
      defaultValue
      changePercentages
    }
  }
}
`;
