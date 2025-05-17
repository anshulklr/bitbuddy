/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        http: require.resolve('stream-http'),
        https: require.resolve('https-browserify'),
        zlib: require.resolve('browserify-zlib'),
        path: require.resolve('path-browserify'),
        os: require.resolve('os-browserify/browser'),
        http2: false,  // Add this line
        child_process: false,  // Add this line
        dns: false,  // Add this line
        dgram: false,  // Add this line
      };

      // Add polyfills
      config.plugins.push(
        new config.webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      );

      config.resolve.alias = {
        ...config.resolve.alias,
        process: "process/browser"
      };
    }
    return config;
  },
};

module.exports = nextConfig;