

// @ts-check

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
  // output: 'export', // force app to be static -> full ssr

  // Optional: Change links /me -> /me/ and emit /me.html -> /me/index.html
  // trailingSlash: true,

  // Optional: Prevent automatic /me -> /me/, instead preserve href
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory out -> dist
  // distDir: '.dist',
  // images: {
  //     unoptimized: true,
  // },
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,

  },
  reactStrictMode: false,
  webpack: (config, { isServer }) => {
    // Add a rule for .mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/sounds/",
          outputPath: "static/sounds/",
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });
    

    return config;
  },
  babel: {
    presets: ["next/babel"]
  }
  
  
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:profile/:second',
  //       destination: '/:profile?second=:second',
  //     },
  //   ]
  // }
};

export default nextConfig;
