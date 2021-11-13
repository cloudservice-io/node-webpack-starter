const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getPackageJson = () => {
  const packageJsonFile = `${process.cwd()}/package.json`;
  const packageJsonText = fs.readFileSync(packageJsonFile).toString();
  return JSON.parse(packageJsonText);
};

module.exports = {
  entry: path.resolve(process.cwd(), 'src/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(getPackageJson().version),
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              [
                '@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
              ],
            ],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [
      'node_modules',
      path.resolve(process.cwd(), 'src'),
      path.resolve(process.cwd(), 'node_modules'),
    ],
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'service.js',
  },
};
