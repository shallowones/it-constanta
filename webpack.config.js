const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
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
      containers: getFullUrl('src/containers/')
    }
  }
}

module.exports = config
