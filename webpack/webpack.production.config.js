const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { rootPath } = require('../config/paths');

const baseConfig = require('./webpack.base.config.js');

module.exports = {
	...baseConfig,
	mode: 'production',
	output: {
		...baseConfig.output,
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].js',
	},
	stats: {
		entrypoints: false,
		children: false,
		modules: false,
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
					MiniCssExtractPlugin.loader,
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
					{ loader: 'sass-loader' },
				],
			},
		],
	},
	performance: {
		hints: false,
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					name: 'vendor',
					chunks: 'all',
					test: /node_modules/,
					priority: 20,
				},
				common: {
					name: 'common',
					minChunks: 2,
					chunks: 'all',
					priority: 10,
					reuseExistingChunk: true,
					enforce: true,
				},
			},
		},
	},
	plugins: [
		...baseConfig.plugins,
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.HashedModuleIdsPlugin(),
		new OptimizeCSSAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css',
		}),
		new webpack.DefinePlugin({
			'process.env.PROD': 'true',
		}),
		new CleanWebpackPlugin(['dist'], {
			root: rootPath,
			verbose: true,
			dry: false,
		}),
	],
};
