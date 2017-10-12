const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');
const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

// app.use(webpackDevMiddleware(compiler, {
//     hot: true,
//     filename: 'bundle.js',
//     publicPath: '/',
//     stats: {
//         colors: true,
//     },
//     historyApiFallback: true,
// }));

// const server = app.listen(3000, function() {
//     const host = "localhost"; // server.address().address;
//     const port = server.address().port;
//     console.log(`Example app listening at http://${host}:${port}`);
// });

const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};


webpackDevServer.addDevServerEntrypoints(webpackConfig, options);
const server = new webpackDevServer(compiler, options);

server.listen(3000, 'localhost', () => {
    console.log('dev server listening on port 3000');
});