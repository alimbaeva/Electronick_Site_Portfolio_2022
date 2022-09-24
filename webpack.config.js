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

const filename = (ext) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const cssLoaders = (extra) => {
    const loaders = [
        { 
             loader: MiniCssExtractPlugin.loader,
             options: {}
         },
         'css-loader',
     ]

     if (extra) {
        if (extra === 'sass-loader') {
            loaders.push({
                loader: "sass-loader",
                options: {
                  sourceMap: true,
                },
            })
        }
        loaders.push(extra);
     }
    return loaders
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analitics.js'
    },
    output: {
        filename: filename('js'),
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
    devtool: 'source-map',
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
            filename: filename('css'),
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.less$/,
                use:cssLoaders('less-loader')
            },
            {
                test: /\.s[ac]ss$/,
                use:cssLoaders('sass-loader')
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
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ]
    }
}