const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

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
    optimization: optimization(),
    devServer: {
        port: 4000,
        hot: isDev
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
            clean: true,
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
                        options: {}
                    },
                    'css-loader',
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