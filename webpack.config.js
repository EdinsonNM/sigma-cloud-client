var webpack = require('webpack'),
path = require('path'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin')
fs = require('fs');

/* babel */
const babelSettings = JSON.parse(fs.readFileSync(".babelrc"));

module.exports={
  entry:{
    app:'./src/index.js'
  },
  output:{
    path:path.resolve(__dirname,'build'),
    filename:'bundle.js'
  },
  resolve:{
    extensions:['.js']
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
    host:'0.0.0.0',
    port:9000,
    inline:true
  },
  module:{
    loaders:[
      {
        test: /(\.js)$/,
        exclude: /node_modules/,
        loader:'babel-loader',
        query:babelSettings
      },
      {
        test: /(\.html|\.css)$/,
        use: 'raw-loader'
      }
    ]
  },
  externals: {
		"jquery": "jQuery"
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			hash: true,
			filename: 'index.html',
			inject: 'body'
		}),
		new CopyWebpackPlugin([
			{from: 'public/css', to: 'css' },
      {from: 'public/fonts', to: 'fonts' },
			{from: 'public/images', to: 'images' },
			{from: 'public/js', to: 'js' },
      {from: 'public/manifest.json', to: 'manifest.json' },
      {from: 'public/sw.js', to: 'sw.js' }
		]),
    
	],
	devtool: "source-map"
};
