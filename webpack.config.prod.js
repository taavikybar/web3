const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: [path.join(__dirname, '/lib/app.js')],
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.ts[x]?$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader'],
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
                include: path.join(__dirname, 'lib/scss/'),
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img',
                    },
                },
            },
            // {
            // 	test: /\.(png|jpg|jpeg|gif|svg)$/,
            // 	use: {
            // 		loader: 'url-loader',
            // 		options: {
            // 			limit: 100000, // 100kb
            // 			name: '[name].[ext]',
            // 			outputPath: 'img',
            // 		},
            // 	},
            // },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        // filename: 'bundle.prod.js',
        // filename: 'bundle.prod-[chunkhash].js',
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, '/build'),
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles-[chunkhash].css',
        }),
        new HtmlWebpackPlugin({
            template: 'index.template.html',
            favicon: './lib/img/favicon.png',
        }),
        new CopyWebpackPlugin({
            patterns: [{ from: 'lib/img/fb-og.jpg', to: 'fb-og.jpg' }],
        }),
    ],
}
