const { withContentlayer } = require("next-contentlayer");
const withMDX = require("@next/mdx")();

/**
 * @type {import('next').NextConfig}
 */
module.exports = withMDX(
  withContentlayer()({
    swcMinify: true,
    reactStrictMode: true,
    images: {
      domains: [
        "pbs.twimg.com", // Twitter Profile Picture
      ],
    },
    webpack: (config, { dev, isServer }) => {
      // Replace React with Preact only in client production build
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: "preact/compat",
          "react-dom/test-utils": "preact/test-utils",
          "react-dom": "preact/compat",
        });
      }

      return config;
    },
  })
);
