import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/hosting/limited",
        destination: "/hosting/limited-shared-hosting",
        permanent: true,
      },
      {
        source: "/hosting/wordpress",
        destination: "/hosting/wordpress-hosting",
        permanent: true,
      },
      {
        source: "/hosting/unlimited",
        destination: "/hosting/unlimited-shared-hosting",
        permanent: true,
      },
      {
        source: "/email-hosting/business",
        destination: "/email-hosting/business-email-hosting",
        permanent: true,
      },
      {
        source: "/email-hosting/enterprise",
        destination: "/email-hosting/enterprise-email-hosting",
        permanent: true,
      },
    ];
  },

  experimental: {
    cpus: 1,
  },

  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
