import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Page() {
  return (
    <Card shadow="none" radius="none" className="border-x border-neutral-900">
      <CardHeader>
        <div className="text-2xl font-semibold">Staking Overview</div>
      </CardHeader>
      <CardBody></CardBody>
      <CardFooter>Footer</CardFooter>
    </Card>
  );
}
