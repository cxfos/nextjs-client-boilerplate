/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      ...config.resolve.fallback,
      fs: false
    };

    config.resolve.modules = [
      ...config.resolve.modules, 
      path.resolve(__dirname, 'src'), 'node_modules'
    ];

    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      styles: path.resolve(__dirname, 'src/styles'),
      src: path.resolve(__dirname, 'src'),
      public: path.resolve(__dirname, 'public'),
      root: path.resolve(__dirname)
    };

    return config;
  },
};

module.exports = nextConfig;
