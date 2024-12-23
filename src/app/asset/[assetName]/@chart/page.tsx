import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Page() {
  return (
    <Card shadow="none" radius="none" className="border-x border-neutral-500 w-full max-w-[1440px]">
      <CardHeader>
        <div className="text-2xl font-semibold">SUI Staking Performance Charts</div>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
