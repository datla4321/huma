const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const sassLoaders = [
  'css-loader',
  'postcss-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
]

const config = {
  entry: {
    app: ['./src/app']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
        
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.woff$/, loader: "url-loader?limit=100000" },
      { test: /\.woff2$/, loader: "url-loader?limit=100000" },
      { test: /\.eot$/, loader: "url-loader?limit=100000" },
      { test: /\.ttf$/, loader: "url-loader?limit=100000" },
      { test: /\.svg$/, loader: "url-loader?limit=100000" },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],
  resolve: {
    extensions: ['', '.js', '.sass'],
    root: [path.join(__dirname, './src')]
  }
}

module.exports = config
