/*
  Warnings:

  - The values [OVERVIEW,GENERAL,RISK,REWARD,MOMENTUM] on the enum `QueryType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "QueryType_new" AS ENUM ('overview', 'general', 'risk', 'reward', 'momentum');
ALTER TABLE "stakingRewardsQuery" ALTER COLUMN "query_type" TYPE "QueryType_new" USING ("query_type"::text::"QueryType_new");
ALTER TYPE "QueryType" RENAME TO "QueryType_old";
ALTER TYPE "QueryType_new" RENAME TO "QueryType";
DROP TYPE "QueryType_old";
COMMIT;
