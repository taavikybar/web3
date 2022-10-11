const path = require('path')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
    const env = dotenv.config().parsed

    const envKeys = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next])
        return prev
    }, {})

    return {
        mode: 'development',
        entry: path.join(__dirname, '/lib/app.js'),
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: ['babel-loader', 'ts-loader'],
                },
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
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
            ],
        },
        devServer: {
            hot: true,
            port: 9010,
            // https: true,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
            },
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        output: {
            filename: 'bundle.dev.js',
            path: path.join(__dirname, '/fe-build'),
        },
        plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.DefinePlugin(envKeys)],
    }
}
