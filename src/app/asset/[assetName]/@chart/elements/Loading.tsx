"use client";

export default function Loading() {
  return (
    <div className="card-body w-full h-full flex items-center justify-center">
      <span className="animate-pulse text-neutral-400 font-semibold text-lg">Fetching data...</span>
    </div>
  );
}