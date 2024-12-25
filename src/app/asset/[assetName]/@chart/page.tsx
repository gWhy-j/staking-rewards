import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <Card shadow="none" radius="none" className="border-x border-neutral-900 w-full max-w-[1440px] px-3">
      <CardHeader>
        <div className="text-2xl font-semibold">{assetName.toUpperCase()} Staking Performance Charts</div>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
