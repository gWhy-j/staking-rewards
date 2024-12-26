export default function Layout({
  chart,
  detail,
  overview,
}: Readonly<{
  chart: React.ReactNode;
  detail: React.ReactNode;
  overview: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col pb-6 w-full">
      {overview}
      <div className="flex lg:flex-row flex-col w-full border-y border-neutral-900 justify-center">
        {chart}
        {detail}
      </div>
    </div>
  );
}
