export const performanceChartQuery = `
query getNetStakingFlowData($slug: String!){
    assets(
        where: {
            isLaunched: true
            underMaintenance: false
            excludeFromRanking: false
            slugs: [$slug]
        }
        limit: 1
        offset: 0
    ) {
        id
        slug
        metrics(showAll: true, limit: 31, where: { metricKeys: ["net_staking_flow"], createdAt_gt: "2024-11-25" }, interval: day) {
            metricKey
            createdAt
            defaultValue
            variation
        }
    }
}`;
