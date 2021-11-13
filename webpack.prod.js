const webpackCommon = require('./webpack.common');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  ...webpackCommon,
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  plugins: [...webpackCommon.plugins, new webpack.optimize.AggressiveMergingPlugin()],
};
