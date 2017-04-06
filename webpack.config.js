const path = require('path');
const webpack = require('webpack');

module.exports = function() {
  return {
  devtool: 'source-map',
  entry: './client_mobile' + '/src/index.jsx',
  output: {
    path: path.join(__dirname, './client_mobile', 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, './client_mobile', 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
  };
};
