const path = require("path");
const PluginDemo = require("./src/plugin-demo");

module.exports = {
  mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				use: {
          loader: path.resolve(__dirname, './src/loader-demo.js'),
          options: {
            activate: true
          }
        }
			},
		]
	},

	plugins: [new PluginDemo({ activate: true })],
};