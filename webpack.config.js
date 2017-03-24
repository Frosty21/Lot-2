var path = require('path');
var webpack = require('webpack');

module.exports = function(root) {
 return {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    root + '/src/index.jsx'
  ],
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
      }
    ]
  }
 }
}
