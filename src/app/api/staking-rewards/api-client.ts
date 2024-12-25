import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";
import { QueryType } from "@prisma/client";

export class StakingApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private prisma: PrismaClient | null = null;

  constructor() {
    this.baseUrl = "https://api.stakingrewards.com/public/query";
    this.apiKey = process.env.STAKING_REWARDS_API_KEY!;
  }

  async prismaClient() {
    if (!this.prisma) {
      const neon = new Pool({
        connectionString: process.env.POSTGRES_PRISMA_URL,
      });
      const adapter = new PrismaNeon(neon);
      this.prisma = new PrismaClient({ adapter });
      await this.prisma.$connect();
    }

    return this.prisma;
  }

  async query(gqlQuery: string, queryType: QueryType, variables?: Record<string, unknown>) {
    const prisma = await this.prismaClient();

    const storedQuery = await prisma.stakingRewardsQuery.findUnique({
      where: {
        query_type: queryType,
      },
    });

    if (!storedQuery || storedQuery.updated_at < new Date(Date.now() - 1000 * 60 * 60 * 24)) {
      const response = await fetch(this.baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": this.apiKey,
        },
        body: JSON.stringify({ query: gqlQuery, variables }),
        next: {
          revalidate: 3600,
        },
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const query_data = await response.json();

      await prisma.stakingRewardsQuery.upsert({
        where: {
          query_type: queryType,
        },
        update: {
          query_data,
        },
        create: {
          query_type: queryType,
          query_data,
        },
      });

      return query_data;
    } else {
      return storedQuery.query_data;
    }
  }
}
