const path = require("path");

const webpack = require("webpack");

const htmlwebpackPlugin = require("html-webpack-Plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  // 入口，表示要使用webpack打包那个文件
  output: {
    //输出文件相关的配置

    path: path.join(__dirname, "./dist"), //指定打包好的文件，输出到那个目录中去

    filename: "bundel.js" //指定输出文件的名称
  },
  plugins: [
    new htmlwebpackPlugin({
      template: path.join(__dirname, "./src/index.html"),

      filename: "index.html"
    }),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        // 'style-loader','css-loader'
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      { test: /\.less$/, use: ["style-loader", "css-loader", "less-loader"] },

      { test: /\.(jpg|pbj|gif|bmp|jpeg)$/, use: "url-loader" },

      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: "url-loader" },

      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },

      { test: /\.vue$/, use: "vue-loader" },
       
      { test:/\.(jpg|png|gif|bmp|jpeg)$/, use :'url-loader?limit=1024&name=[hash:8]-[name].[ext]'},
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery"
          },
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      }
    ]
  }
};
