module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.optimization.splitChunks = {
      chunks: "async",
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: false,
        default: false,
        framework: {
          chunks: "all",
          name: "framework",
          test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
          priority: 40,
          enforce: true,
        },
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 20,
          priority: 20,
        },
      },
    };

    return config;
  },
};
