const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    publicPath: '/',
    filename: '[name]_[contenthash:8].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ],
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new MiniCssExtractPlugin({
      filename: `[name]_[contenthash:8].css`
    }),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
