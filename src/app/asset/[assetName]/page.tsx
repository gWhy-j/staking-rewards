import Image from "next/image";
import React from "react";

export default async function Page({ params }: { params: Promise<{ assetName: string }> }) {
  const { assetName } = await params;
  return (
    <div className="flex-col py-12 px-8 bg-black">
      <div className="flex items-center mb-4 gap-3">
        <div>
          <Image src={`/${assetName}.svg`} alt={assetName} width={30} height={40} />
        </div>
        <div className="text-4xl font-semibold text-white">{assetName.toUpperCase()} Staking Analytics</div>
      </div>
      <div className="text-neutral-400 text-medium max-w-[1440px]">
        As of today, there are <span className="text-white">{267726}</span> stakers actively staking on the network.
      </div>
      <div className="text-neutral-400 text-medium max-w-[1440px]">
        The Staking Ratio, or percentage of SUI being staked, is currently <span className="text-white">{78.32}%</span> of the total eligible circulating supply, increasing by <span className="text-white">{0.09}%</span> over the past 7 days.
      </div>
      <div className="text-neutral-400 text-medium max-w-[1440px]">
        In total, <span className="text-white">8b</span> SUI is staked across the network, generating <span className="text-white">$955m</span> worth of staking rewards per year.
      </div>
    </div>
  );
}
