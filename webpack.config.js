const path = require('path');
const webpack = require('webpack');

module.exports = function(root) {
  return {
  devtool: 'source-map',
  entry: root + '/src/index.jsx',
  output: {
    path: path.join(__dirname, root, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, root, 'src')
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  }
  };
};
