const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const getAbsolutePath = pathParam => path.resolve(process.cwd(), pathParam);

module.exports = {
  entry: getAbsolutePath('src/index.js'),
  target: 'node',
  externals: [nodeExternals()],
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, getAbsolutePath('src/**/*.spec.js')],
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
    modules: [getAbsolutePath('src'), getAbsolutePath('node_modules')],
  },
  output: {
    path: getAbsolutePath('build'),
    filename: 'service.js',
  },
};
