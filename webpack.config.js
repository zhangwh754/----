// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env) => {
  const isCounter = env.app === "counter";

  return {
    mode: "development",
    entry: {
      [env.app]: isCounter ? "./src/app1/main.js" : "./src/app2/main.js",
    },
    output: {
      path: path.resolve(__dirname, "dist", env.app),
      filename: "[name].bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
        {
          test: /\.js$/,
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: isCounter ? "./counter.html" : "./person.html",
        filename: "index.html",
      }),
      new VueLoaderPlugin(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist", env.app),
      },
      port: isCounter ? 8080 : 8081,
      hot: true,
      open: true,
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
  };
};
