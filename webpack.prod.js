const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { stylePaths } = require("./stylePaths");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

module.exports = merge(common('production'), {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new TerserJSPlugin({}),
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: ['default', { mergeLonghand: false }]
        }
      })
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost/tsugi/mod/tsugi-react-base/dist/',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].bundle.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        include: [
          ...stylePaths
        ],
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.tsx$/,
        loader: 'string-replace-loader',
        options: {
          search: '__TSUGI_RELATIVE_PATH__',
          replace: '/py4e/mod/tsugi-react-base',
          flags: 'g'
        }
      }
    ]
  }
});
