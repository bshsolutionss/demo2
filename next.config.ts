import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Tailwind v4 compiles shared brand tokens and component utilities through Turbopack. */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
