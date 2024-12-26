import { Card, CardHeader, CardBody } from "@nextui-org/react";
import ChartWrapper from "./components/ChartWrapper";
import ClientContent from "@/app/layout/ClientContent";
import Loading from "./elements/Loading";
export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <Card shadow="none" radius="none" className="fitWidth:border-l lg:border-r border-neutral-900 w-full lg:max-w-[700px] min-h-[700px]">
      <CardHeader>
        <div className="sm:text-2xl text-xl font-semibold">{assetName.toUpperCase()} Staking Performance Charts</div>
      </CardHeader>
      <CardBody className="p-0">
        <ClientContent loading={<Loading />}>
          <ChartWrapper assetName={assetName} />
        </ClientContent>
      </CardBody>
    </Card>
  );
}
