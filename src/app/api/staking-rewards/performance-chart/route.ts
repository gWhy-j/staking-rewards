import { NextRequest, NextResponse } from "next/server";
import { StakingApiClient } from "../api-client";
import { performanceChartQuery } from "./query";
import { QueryType } from "@prisma/client";
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");

    if (!slug) {
      return Response.json({ error: "Slug parameter is required" }, { status: 400 });
    }

    const suiId = "639055dbfefa3c0008d8fd7e";

    const client = new StakingApiClient();
    const result = await client.query(performanceChartQuery, QueryType.PERFORMANCE_CHART, { id: suiId, metricKeys: ["price", "staked_tokens", "reward_rate", "inflation_rate"] });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching staking data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
