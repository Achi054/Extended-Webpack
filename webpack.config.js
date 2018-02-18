var path = require('path');
var webpack = require('webpack');

var commomPlugins = new webpack.optimize.CommonsChunkPlugin();

module.exports = {
	context: path.resolve('js'),
	entry: {
		about: './about_page.js',
		home: './home_page.js',
		index: './index_page.js'
	},
	output: {
		path: '/build/js/',
		publicPath: '/public/assets/js/',
		filename: "[name].js"
	},

	devServer: {
		contentBase: 'public'
	},

	module: {
		loaders: [
			{
				test: /\.es6$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},

	resolve: {
		extensions: ['.js', '.es6']
	}
}