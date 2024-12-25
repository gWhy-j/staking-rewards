/*
  Warnings:

  - A unique constraint covering the columns `[query_type]` on the table `stakingRewardsQuery` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "stakingRewardsQuery_query_type_key" ON "stakingRewardsQuery"("query_type");
