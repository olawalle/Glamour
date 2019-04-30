
const withCSS = require('@zeit/next-css')
const withLess = require('@zeit/next-less')
const webpack = require('webpack');

const withFonts = require('next-fonts');
module.exports = withFonts(withLess(withCSS(
  {
    webpack: function (config) {
      config.module.rules.push({
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            name: '[name].[ext]'
          }
        }
      })

      config.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      }))

      return config
    }
  }
)));