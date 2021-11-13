const babeljest = require('babel-jest').default;

module.exports = babeljest.createTransformer({
  presets: ['@babel/env'],
  plugins: ['@babel/plugin-proposal-class-properties'],
});
