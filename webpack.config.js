const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analitics.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@@': path.resolve(__dirname, 'src/asset')
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devServer: {
        port: 4000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/favicon.ico')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css',
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use:[
                   { 
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true
                        },
                    }
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images'
                      }
                }]  
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use:[{
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts'
                      }
                }]
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }
}