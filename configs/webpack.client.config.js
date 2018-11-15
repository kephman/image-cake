const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const packageValues = require('../package.json');

const rootPath = path.join(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist/client');
const { version = '1.0.0' } = packageValues || {};

module.exports = {
    context: __dirname,
    entry: {
        client: '../src/client.js',
    },
    optimization: {
        minimize: false,
    },
    output: {
        path: distPath,
        filename: `[name].${version}.bundle.js`,
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        }],
    },
    plugins: [
        new CleanWebpackPlugin(['dist/client/*.*'], { root: rootPath }),
    ],
    target: 'web',
};
