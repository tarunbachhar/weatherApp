const webpack  = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const config = {
  entry:'./src/index11.js',
  devtool:'source-map',
  devServer:{
    contentBase:'./dist',
    historyApiFallback:true
  },
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename:'index.html',
      inject:'body'
    }),
    new UglifyJsPlugin({
      sourceMap:true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production')
    })
  ],
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'dist')
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude:/(node_modules)/,
        loader:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/\.(jpg|png|svg|gif)$/,
        use:[
          'file-loader'
        ]
      }
    ]
  }
}
module.exports = config
