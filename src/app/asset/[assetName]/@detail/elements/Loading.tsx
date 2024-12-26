import { Skeleton, Divider } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex flex-col justify-center w-full h-[6.5rem] px-4 gap-4">
        <Skeleton className="rounded-full w-40 h-2 mt-3" />
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            <Skeleton className="rounded-full w-16 h-2" />
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Skeleton className="rounded-full w-full h-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2">
        <Divider className="bg-neutral-400" />
      </div>

      <div className="flex flex-col justify-center w-full h-[5.5rem] px-4 gap-4">
        <Skeleton className="rounded-full w-40 h-2 mt-3" />
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            <Skeleton className="rounded-full w-16 h-2" />
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Skeleton className="rounded-full w-full h-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2">
        <Divider className="bg-neutral-400" />
      </div>

      <div className="flex flex-col justify-center w-full h-[5.5rem] px-4 gap-4">
        <Skeleton className="rounded-full w-40 h-2 mt-3" />
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            <Skeleton className="rounded-full w-16 h-2" />
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Skeleton className="rounded-full w-full h-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2">
        <Divider className="bg-neutral-400" />
      </div>

      <div className="flex flex-col justify-center w-full h-[5.5rem] px-4 gap-4">
        <Skeleton className="rounded-full w-40 h-2 mt-3" />
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            <Skeleton className="rounded-full w-16 h-2" />
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Skeleton className="rounded-full w-full h-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2">
        <Divider className="bg-neutral-400" />
      </div>

      <div className="flex flex-col justify-center w-full h-[5.5rem] px-4 gap-4">
        <Skeleton className="rounded-full w-40 h-2 mt-3" />
        <div className="flex items-center w-full gap-8">
          <div className="text-neutral-800 font-semibold text-xl min-w-[150px]">
            <Skeleton className="rounded-full w-16 h-2" />
          </div>
          <div className="flex flex-col gap-1 w-[150px]">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Skeleton className="rounded-full w-full h-2" />
              </div>
            </div>
          </div>
          <div className="range-bar flex-auto pb-1.5 h-full flex px-4 items-end justify-center">
            <div className="relative w-full">
              <Skeleton className="rounded-full w-full h-1" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-2">
        <Divider className="bg-neutral-400" />
      </div>
    </div>
  );
}
