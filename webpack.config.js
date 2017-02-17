var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:   {
    "vatrates":     "./src/js/vatrates.js",
    "vatrates.min": "./src/js/vatrates.js"
  },
  output:  {
    library:       'VATRates',
    libraryTarget: 'umd',
    path:          path.resolve(__dirname + '/dist/'),
    filename:      '[name].js'
  },
  module:  {
    loaders: [
      {
        test:    /\.js$/,
        loader:  'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query:   {
          presets: [
            ["env", {
              targets: {
                browsers: ["last 2 versions"]
              }
            }]
          ]
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include:  /\.min\.js$/,
      minimize: true
    }),
    new webpack.BannerPlugin(
      "VATRates v" + require('./package.json').version + "\n" +
      "MIT License"
    ),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
