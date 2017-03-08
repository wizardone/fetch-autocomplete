const path = require('path')
module.exports = {
  entry: './index.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: 'lib/'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}
