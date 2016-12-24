const webpack                      = require('webpack');


module.exports = {
  context: __dirname+ "/src",
  entry: {
  	 aya: './main.js'
  },
  //watch: true,
  output: {
  	path: __dirname+'/dist/js',
  	filename: '[name].js',
    library: "aya"
  },
  devtool: 'source-map',
  module:{
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },

    ]
  }
}