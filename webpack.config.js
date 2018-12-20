const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const sassRegex = /\.(scss|sass|css)$/;
const jsxRegex = /\.(js|jsx|mjs)$/;

module.exports = (env, argv) => ({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devServer: {
    port: 5000,
    host: 'localhost',
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: jsxRegex,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ],
      },
      {
        test: sassRegex,
        loaders: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
          require.resolve('sass-loader'),
        ]
      }
    ]
  },
  devtool: argv.mode == 'development' ? 'source-map' : false,
  performance: { hints: false },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    })
  ]
});