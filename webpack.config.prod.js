const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('file-loader');
const CleanPlugin = require('clean-webpack-plugin');
// const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'production',
  entry: './src/app.js',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      options: {
        scriptLoading: 'defer'
      }
    }),

    new CleanPlugin.CleanWebpackPlugin()
  ]
};
