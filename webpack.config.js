const HtmlWebpackPlugin = require('html-webpack-plugin')
const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './client/app.js'
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: __dirname + '/client', loader: "babel-loader"}
    ]
  },
  output: {
    filename: "app_bundle.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
}