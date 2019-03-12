const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': "'development'" }
    }),
    new VueLoaderPlugin(),
    new UglifyJsPlugin()
  ],
  output: {
    filename: 'bundle.js',
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: [
            ['latest', {
              modules: false
            }],
          ],
        },
      },
      {
        test: /\.vue$/,
        exclude: /(node_modules)/,
        loader: 'vue-loader'
      }
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
};