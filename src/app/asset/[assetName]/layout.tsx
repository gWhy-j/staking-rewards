export default function Layout({
  chart,
  detail,
  overview,
  children,
}: Readonly<{
  chart: React.ReactNode;
  detail: React.ReactNode;
  overview: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col pb-6 w-full">
      {children}
      <div className="flex w-full border-y border-neutral-900 justify-center">
        {overview}
        {detail}
      </div>
      <div className="flex w-full border-b border-neutral-900 justify-center">{chart}</div>
    </div>
  );
}
