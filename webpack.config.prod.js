const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production'
        }),
        new UglifyJSPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        alias: {'@src': 'src'}
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: "ts-loader"
        }, {
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            exclude: /\.(node_modules)$/,
            include: __dirname,
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader'
            ]
        }, {
            test: /\.xml$/,
            use: [
                'xml-loader'
            ]
        }],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};