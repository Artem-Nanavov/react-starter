const webpack = require('webpack');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const Dotenv = require('dotenv-webpack');

const baseConfig = require('./webpack.base.config.js');

module.exports = {
	...baseConfig,
	mode: 'development',
	devtool: 'eval-source-map',
	output: {
		...baseConfig.output,
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
	},
	module: {
		rules: [
			...baseConfig.module.rules,
			{
				test: /\.(css|scss)$/,
				include: /node_modules/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(css|scss)$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[name]__[local]__[hash:base64:5]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							config: {
								path: path.resolve(__dirname),
							},
						},
					},
					{
						loader: 'sass-loader',
						options: {
							includePaths: [path.resolve(__dirname, '../src')],
						},
					},
				],
			},
		],
	},
	plugins: [
		...baseConfig.plugins,
		new webpack.HotModuleReplacementPlugin(),
		new WebpackNotifierPlugin({
			skipFirstNotification: true,
			title: 'client',
		}),
		new Dotenv({
			path: path.resolve(__dirname, '../.env'),
		}),
	],
};
