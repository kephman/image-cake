const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist/client');

module.exports = {
    context: __dirname,
    entry: {
        client: '../src/client.js',
    },
    optimization: {
        minimize: true,
    },
    output: {
        path: distPath,
        filename: '[name].[hash:10].bundle.js',
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
