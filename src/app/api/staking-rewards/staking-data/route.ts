import { NextRequest, NextResponse } from "next/server";
import { StakingApiClient } from "../api-client";
import { query } from "./query";
import { QueryType } from "@prisma/client";
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    const tab = searchParams.get("tab");

    if (!slug || !tab) {
      return Response.json({ error: "Slug and tab parameter is required" }, { status: 400 });
    }

    const client = new StakingApiClient();
    const result = await client.query(query[tab], tab.toUpperCase() as QueryType, { slug });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching staking data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
