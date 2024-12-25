import { Card, CardHeader, CardBody } from "@nextui-org/react";
import OverviewRadar from "./components/OverviewRadar";
import { Suspense } from "react";
import Loading from "./elements/Loading";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <Card shadow="none" radius="none" className="border-x border-neutral-900 px-3">
      <CardHeader>
        <div className="text-2xl font-semibold">Staking Data Overview</div>
      </CardHeader>
      <CardBody>
        <Suspense fallback={<Loading />}>
          <OverviewRadar assetName={assetName} />
        </Suspense>
      </CardBody>
    </Card>
  );
}
