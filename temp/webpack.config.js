let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let LiveReloadPlugin = require('webpack-livereload-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
let pathsToClean = [
  'dist'
]

// the clean options to use
let cleanOptions = {
  root:     __dirname,
  verbose:  true,
  dry:      false
}

let config = {
	context: __dirname + '/src',
	entry: {
	  app: './app.js',
	},
	output: {
	  path: __dirname + '/dist',
	  filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000
	},
	module: {
		rules: [{
			test: /\.html$/,
			use: [ {
				loader: 'html-loader',
				options: {
					minimize: false,
					removeComments: false,
					collapseWhitespace: false
				}
			}],
		}]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: 'index.html'
		}),
			new LiveReloadPlugin({
				appendScriptTag: true 
			})
		]
};

module.exports = config;
	
