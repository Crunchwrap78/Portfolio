const path = require('path')
const webpack = require('webpack')
var HtmlWebpackPlugin = require ('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './app/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
