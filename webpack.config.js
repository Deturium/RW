const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge = require("webpack-merge")

const commom = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, './egg/app/public'),
    publicPath: '/',
    filename: 'js/[name].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 4096,
        },
      },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      // favicon: './public/icon.ico',
      inject: true,
    }),
  ],
}

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(commom, {
    mode: "development",

    devtool: 'eval-source-map',

    devServer: {
      historyApiFallback: true,
      open: true,
      port: 8000,
      stats: 'errors-only',
      proxy: {
        "/api": {
          target: "http://localhost:7001",
          changeOrigin: true,
        },
      },
    },
  })
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(commom, {
    mode: "production",

    plugins: [
      new CleanWebpackPlugin(['egg/app/public']),
    ],

    optimization: {
      minimize: true,
    },
  })
}
