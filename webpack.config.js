const path = require('path')
const HTMLWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require('clean-webpack-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const merge = require("webpack-merge")

const commom = {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: path.resolve(__dirname, './dist'),
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
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]_[hash:5]'
            }
          },
          'less-loader'
        ]
      },

      // config babel-plugin-import for antd
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          },
        ]
      }
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

    // webpack-dev-server config
    // "--hot" and "--inline" should be passed in package.json to enable HMR
    devServer: {
      historyApiFallback: true,
      open: true,
      port: 8000,
      stats: 'errors-only',
    },
  })
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(commom, {
    mode: "production",

    plugins: [
      new CleanWebpackPlugin(['dist']),
    ],

    optimization: {
      minimize: true,

      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
  })
}
