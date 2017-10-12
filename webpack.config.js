const path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ],
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, ],
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};