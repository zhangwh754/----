// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");

const appConfigs = {
  counter: {
    entry: "./src/app1/main.js",
    template: "./counter.html",
    port: 8080
  },
  person: {
    entry: "./src/app2/main.js",
    template: "./person.html",
    port: 8081
  }
};

module.exports = (env) => {
  const appConfig = appConfigs[env.app];

  return {
    mode: "development",
    entry: {
      [env.app]: appConfig.entry
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
        template: appConfig.template,
        filename: "index.html",
      }),
      new VueLoaderPlugin(),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist", env.app),
      },
      port: appConfig.port,
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
