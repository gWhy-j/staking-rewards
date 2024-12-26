"use client";

export default function Loading() {
  return (
    <div className="card-body w-full flex items-center justify-center compact:h-[300px] h-[200px]">
      <span className="animate-pulse text-neutral-400 font-semibold text-lg">Fetching data...</span>
    </div>
  );
}
