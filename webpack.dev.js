const webpackCommon = require('./webpack.common');

module.exports = {
  ...webpackCommon,
  devtool: 'eval-source-map',
  mode: 'development',
};
