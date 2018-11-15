const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootPath = path.join(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist/server');

module.exports = {
    context: __dirname,
    entry: {
        server: '../src/server.js',
    },
    optimization: {
        minimize: true,
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js',
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
        new CleanWebpackPlugin(['dist/server/*.*'], { root: rootPath }),
    ],
    target: 'node',
};
