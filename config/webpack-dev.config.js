const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../test/', 'index.js'),
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    historyApiFallback: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: '/build/contracts/'
      },
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(pdf|jpg|png|gif|svg|ico)$/,
        use: [{
            loader: 'url-loader',
            options: {
                limit: 8192, // Convert images < 8kb to base64 strings
            }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/index.html'
    }),
  ],
  externals: [
    {
      xmlhttprequest: '{XMLHttpRequest:XMLHttpRequest}'
    }
  ]
};
