const imageHostNames = ["localhost"];

function getImageHostNames() {
  const result = [];
  for (const imageHostName of imageHostNames) {
    result.push({
      protocol: "http",
      hostname: imageHostName.toLowerCase(),
    });
    result.push({
      protocol: "https",
      hostname: imageHostName.toLowerCase(),
    });
  }

  return result;
}

/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["@repo/ui", "@repo/utils"],
  experimental: {
    scrollRestoration: true,
    instrumentationHook: false,
  },
  reactStrictMode: true,
  swcMinify: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: getImageHostNames(),
  },
};

module.exports = nextConfig;
