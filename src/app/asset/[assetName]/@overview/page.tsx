import { Card, CardHeader, CardBody } from "@nextui-org/react";
import OverviewRadar from "./components/OverviewRadar";
import { Suspense } from "react";
import Loading from "./elements/Loading";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <Card shadow="none" radius="none" className="border-x border-neutral-900 px-3 w-full max-w-[600px]">
      <CardHeader>
        <div className="text-2xl font-semibold">Staking Data Overview</div>
      </CardHeader>
      <CardBody className="w-full h-[400px] p-0">
        <Suspense fallback={<Loading />}>
          <OverviewRadar assetName={assetName} />
        </Suspense>
      </CardBody>
    </Card>
  );
}
