const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const path = require('path');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: '[name]-[hash:8].[ext]',
                    outputPath: 'images/',
                    publicPath: '../../images/'
                }
            }
        ]
      },
      {
          test: /\.html$/,
          use: [
              {
                  loader:"html-loader",
                  options: {
                    attributes: {
                        list: [
                          {
                            tag: 'img',
                            attribute: 'src',
                            type: 'src',
                          },]
                        }
                  }
              }
          ]
      }
    ]
  },
  plugins: [htmlPlugin, new MiniCssExtractPlugin()]
};