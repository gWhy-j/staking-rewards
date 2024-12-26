// API 크레딧 사용 제한을 위해 날짜 고정
export const performanceChartQuery = `
query getChartMetrics($metricKeys: [String!], $id: String!) {
    assets(where: { ids: [$id] }, limit: 1) {
        slug
        metrics(limit: 60,
                where: {
                        metricKeys: $metricKeys,
                        createdAt_gt: "2024-12-11T00:00:00Z",
                        createdAt_lt: "2024-12-27T00:00:00Z"
                },
                interval: day
                order: { createdAt: asc }
                pickItem: last
        ){
            metricKey
            defaultValue
            createdAt
        }
    }
}
`;
