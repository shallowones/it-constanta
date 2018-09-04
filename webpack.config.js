const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const getFullUrl = endDir => path.join(process.cwd(), endDir)

const config = {
  entry: './src/index.js',
  output: {
    path: getFullUrl('dist'),
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html'
    }),
    new ExtractTextPlugin({
      filename: 'main.css'
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  resolve: {
    alias: {
      components: getFullUrl('src/components/'),
      containers: getFullUrl('src/containers/'),
      utils: getFullUrl('src/utils/')
    }
  }
}

module.exports = config
