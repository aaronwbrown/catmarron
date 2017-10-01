const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/js/index.js'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  devServer: {
    hot: true,
    host: '127.0.0.1',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['.js']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}