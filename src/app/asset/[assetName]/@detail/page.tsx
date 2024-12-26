import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Content from "./components/Content";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;

  return (
    <Card shadow="none" radius="none" className="fitWidth:border-r max-lg:border-t border-neutral-900 px-0 w-full lg:max-w-[700px] min-h-[700px]">
      <CardHeader>
        <div className="sm:text-2xl text-xl font-semibold px-3">Analyze {assetName.toUpperCase()} Staking Data</div>
      </CardHeader>
      <CardBody className="p-0">
        <Content assetName={assetName} />
      </CardBody>
    </Card>
  );
}
