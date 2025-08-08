const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { compileFunction } = require('vm');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
};