export class StakingApiClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor() {
    this.baseUrl = "https://api.stakingrewards.com/public/query";
    this.apiKey = process.env.STAKING_REWARDS_API_KEY!;
  }

  async query(gqlQuery: string, variables?: Record<string, unknown>) {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": this.apiKey,
      },
      body: JSON.stringify({ query: gqlQuery, variables }),
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`);
    }

    return response.json();
  }
}
