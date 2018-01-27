const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.argv.indexOf('-p') >= 0;

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: './src/index.tsx',
        vendor: [
            'react',
            'react-dom',
            'react-redux',
            'react-router',
            'redux'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    target: "web",
    resolve: {
        extensions: ['.ts', '.tsx', '.jsx', '.js'],
        // Fix webpack's default behavior to not load packages with jsnext:main module
        // https://github.com/Microsoft/TypeScript/issues/11677
        mainFields: ['browser', 'main'],
        alias: {'@src': path.join(__dirname, 'src')}
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: isProduction
                ? 'awesome-typescript-loader?module=es6'
                : [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader'
                ]
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
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'public/index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.
    ],
    devServer: {
        hot: true,
        contentBase: [
            path.join(__dirname, "public"),
            path.join(__dirname, "dist"),
        ],
        compress: false,
        port: 3000,
        index: "index.html",
        open: true,
        useLocalIp: false
    },
    node: {
        // workaround for webpack-dev-server issue
        // https://github.com/webpack/webpack-dev-server/issues/60#issuecomment-103411179
        fs: 'empty',
        net: 'empty'
    }
}
;
