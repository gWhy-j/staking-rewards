import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Content from "./components/Content";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;

  return (
    <Card shadow="none" radius="none" className="border-r border-neutral-900 px-0">
      <CardHeader>
        <div className="text-2xl font-semibold px-3">Analyze {assetName.toUpperCase()} Staking Data</div>
      </CardHeader>
      <CardBody className="p-0 min-w-[700px]">
        <Content assetName={assetName} />
      </CardBody>
    </Card>
  );
}
