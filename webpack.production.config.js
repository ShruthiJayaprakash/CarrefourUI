var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
      './src/index'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.[hash].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
        hash: true,
        filename: 'index.html'
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  module: {
    loaders: [
      { 
        loaders: ['babel-loader'], 
        include: path.join(__dirname, 'src')
      },
      {test: /\.json$/,loaders: [ 'json' ],exclude: /node_modules/, include: path.join(__dirname, 'src')},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loaders: ['file-loader']},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  }
};
