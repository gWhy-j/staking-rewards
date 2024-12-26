import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/asset/sui",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
