const { resolve } = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: '/src/index.js',
    output: {
        filename: 'rainComponent.min.js',
        path: resolve(__dirname, 'dist'),
        libraryTarget: "umd",
        library: 'rainComponent'
    },
    // devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                    ],
                                ],
                            },
                        }
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        exclude: /node_modules/,
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'usage',
                                    modules: false,
                                    corejs: { version: 3 },
                                    targets: {
                                        chrome: '60',
                                        firefox: '60',
                                        ie: '9',
                                        safari: '10',
                                        edge: '17'
                                    }
                                }
                            ]
                        ],
                        plugins: [
                            ['@babel/plugin-transform-runtime', {
                                "corejs": false,
                                "helpers": false
                            }]
                        ],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'rainComponent.min.css'
        })
    ],
    mode: 'production',
}