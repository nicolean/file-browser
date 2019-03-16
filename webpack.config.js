const path = require('path');

module.exports = {
  // entry: './src/index.js',
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'file-browser.js'
	},
	mode: 'development',
  module: {
    rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader", // creates style nodes from JS strings
					"css-loader", // translates CSS into CommonJS
					"sass-loader" // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	},
	devServer:{
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		compress: true,
		port: 3000,
	}
};