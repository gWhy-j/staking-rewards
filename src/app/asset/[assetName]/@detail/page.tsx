"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams();
  const assetName = params.assetName as string;

  useQuery({
    queryKey: ["staking-data", assetName],
    queryFn: () => fetch(`/api/staking-rewards/staking-data?slug=${assetName}`).then((res) => res.json()),
  });

  return (
    <Card shadow="none" radius="none" className="border-r border-neutral-500">
      <CardHeader>
        <div className="text-2xl font-semibold">Analyze {assetName.toUpperCase()} Staking Data</div>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
