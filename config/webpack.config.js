const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
    plugins: [
      new VueLoaderPlugin(),
      new UglifyJsPlugin()
    ],
    output: {
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          query: {
            presets: [
              ['latest', { modules: false }],
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