const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { name } = require('file-loader');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    principale: './src/app.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'assets', 'js')
    // publicPath: 'assets/js/'
  },

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
          name: '[path][name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    open: true,
    static: path.resolve(__dirname, 'assets', 'js')
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
