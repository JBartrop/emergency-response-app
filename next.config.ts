import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    MapsApi: process.env.MAP_API,
  },
};

export default nextConfig;
