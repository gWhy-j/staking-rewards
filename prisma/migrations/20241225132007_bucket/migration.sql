-- CreateEnum
CREATE TYPE "QueryType" AS ENUM ('OVERVIEW', 'GENERAL', 'RISK', 'REWARD', 'MOMENTUM');

-- CreateTable
CREATE TABLE "stakingRewardsQuery" (
    "id" SERIAL NOT NULL,
    "query_type" "QueryType" NOT NULL,
    "query_data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "stakingRewardsQuery_pkey" PRIMARY KEY ("id")
);
