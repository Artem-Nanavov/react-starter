const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const webpackConfig = require('./webpack.development.config');
const { port, host } = require('../config/dev');

const options = {
	contentBase: false,
	hot: true,
	host,
	quiet: false,
	disableHostCheck: true,
	publicPath: '/',
	historyApiFallback: {
		rewrites: [{ from: '/', to: '/' }],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	proxy: {},
};

WebpackDevServer.addDevServerEntrypoints(webpackConfig, options);

const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler, options);

server.listen(port, host);
