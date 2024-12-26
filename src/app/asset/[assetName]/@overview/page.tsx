import { Card, CardHeader, CardBody } from "@nextui-org/react";

import Image from "next/image";
import OverviewRadar from "./components/OverviewRadar";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <div className="w-full flex lg:flex-row flex-col justify-center">
      <div className="flex flex-col pt-12 pb-8 px-8 bg-black lg:max-w-[900px] fitWidth:border-l border-neutral-900 justify-between gap-4">
        <div className="flex flex-col justify-between">
          <div className="flex items-center mb-8 gap-3">
            <div>
              <Image src={`/${assetName}.svg`} alt={assetName} width={30} height={38} />
            </div>
            <div className="sm:text-4xl text-3xl font-semibold text-white">{assetName.toUpperCase()} Staking Analytics</div>
          </div>
          <div className="text-neutral-400 sm:text-medium text-sm mb-4">
            Staking SUI is the act of committing your SUI tokens to a validator, to help verify transactions and support consensus on the network. By staking, you can earn <span className="text-white">$SUI</span> rewards, paid out every epoch (
            <span className="text-white">24 hours</span>).
          </div>
          <div>
            <div className="text-neutral-400 sm:text-medium text-sm">
              As of today, there are <span className="text-white">{267726}</span> stakers actively staking on the network. The Staking Ratio, or percentage of SUI being staked, is currently <span className="text-white">{78.32}%</span> of the total
              eligible circulating supply, increasing by <span className="text-white">{0.09}%</span> over the past 7 days. In total, <span className="text-white">8b</span> SUI is staked across the network, generating{" "}
              <span className="text-white">$955m</span> worth of staking rewards per year.
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end gap-6">
          <a href="https://x.com/SuiNetwork" target="_blank">
            <Image src="/logo/x.svg" alt="x" width={24} height={24} className="w-[24px] cursor-pointer" />
          </a>
          <a href="https://discord.com/invite/sui" target="_blank">
            <Image src="/logo/discord.svg" alt="discord" width={24} height={24} className="w-[24px] cursor-pointer" />
          </a>
          <a href="https://github.com/MystenLabs" target="_blank">
            <Image src="/logo/github.svg" alt="github" width={24} height={24} className="w-[24px] cursor-pointer" />
          </a>
          <a href="https://medium.com/mysten-labs" target="_blank">
            <Image src="/logo/blog.svg" alt="blog" width={24} height={24} className="w-[24px] cursor-pointer" />
          </a>
          <a href="https://sui.io" target="_blank">
            <Image src="/logo/website.svg" alt="website" width={24} height={24} className="w-[24px] cursor-pointer" />
          </a>
        </div>
      </div>
      <Card shadow="none" radius="none" className="fitWidth:border-r lg:border-l border-neutral-900 px-3 shrink-0 w-full lg:max-w-[500px]">
        <CardHeader>
          <div className="sm:text-2xl text-xl font-semibold">Staking Data Overview</div>
        </CardHeader>
        <CardBody className="w-full h-full p-0 flex justify-center items-center">
          <OverviewRadar assetName={assetName} />
        </CardBody>
      </Card>
    </div>
  );
}
