const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const {resolve} = require('./utils');

module.exports = function webpackBaseConfig (NODE_ENV = 'development') {
    require('../config')(NODE_ENV);
    const config = require('../config/config')[NODE_ENV];

    let files = ['index/index'];

    let entry = {
        common: ['jquery']
    };

    let plugins = [
        new ExtractTextPlugin({
            filename: 'v1/css/[name].css',
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common']
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
            'process.env.API_DOMAIN': JSON.stringify(config.API_DOMAIN),
            'process.env.ORIGIN_URL': JSON.stringify(config.ORIGIN_URL),
            'process.env.ACCOUNT_DOMAIN': JSON.stringify(config.ACCOUNT_DOMAIN),
            'process.env.ACCOUNT_LOGIN': JSON.stringify(config.ACCOUNT_LOGIN),
            'process.env.ACCOUNT_WEBVIEW': JSON.stringify(config.ACCOUNT_WEBVIEW),
            'process.env.ACCOUNT_JS_SDK': JSON.stringify(config.ACCOUNT_JS_SDK),
            'process.env.ACCOUNT_CALLBACK': JSON.stringify(config.ACCOUNT_CALLBACK),
            'process.env.CART_DOMAIN': JSON.stringify(config.CART_DOMAIN)
        })
    ];

    files.forEach((item) => {
        entry[item] = resolve('src', item + '.js');
        let filename = 'views/' + item.substring(item.indexOf('/') + 1, item.length);
        plugins.push(
            new HtmlWebpackPlugin({
                filename: filename + '.html',
                template: path.resolve('./src/' + item + '-render.js'),
                chunks: ['common', item],
                hash: true,
                inject: 'body',
                xhtml: false,
                minify: {
                    removeComments: true,
                }
            })
        );
    });

    console.log(entry);

    const webpackConfig = {
        entry,
        output: {
            path: resolve('../dist/pc'),
            publicPath: config.staticPath,
            filename: 'v1/js/[name].js',
            chunkFilename: 'v1/js/[name].js'
        },
        externals: {
            jquery: '$'
        },
        devtool: config.devtool,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules)/,
                },
                {
                    test: /\.js$/,
                    enforce: 'pre',
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.ejs$/,
                    loader: 'ejs-loader'
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: 'url-loader?limit=1&name=v1/images/[name].[ext]'
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'file-loader?name=v1/fonts/[name].[ext]'
                },
                {
                    test: /\.(scss|css)$/,
                    use: ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: false,
                                    minimize: true,
                                }
                            },
                            'postcss-loader',
                            'sass-loader?sourceMap',
                        ],
                        fallback: 'style-loader'
                    })
                },
            ]
        },
        plugins,
        resolve: {
            alias: {
                resources_js: resolve('src/resources/js/'),
                resources_api: resolve('src/resources/api/'),
                resources_css: resolve('src/resources/scss/'),
                resources_const: resolve('src/resources/const/'),
                resources_util: resolve('src/resources/utils/'),
                app: resolve('src/resources/js/app.js'),
                layout: resolve('layout/index.js')
            },
        },
    };

    // 开发环境服务器配置
    webpackConfig.devServer = {
        contentBase: resolve('dist'),
        compress: false,
        host: '127.0.0.1',
        port: config.port,
        hot: true,                                  // 热启动
        disableHostCheck: true,
        historyApiFallback: true
    };

    // webpack watch 配置
    webpackConfig.watchOptions = {
        poll: 500,
        aggregeateTimeout: 500,
        ignored: 'node_modules'
    };

    return webpackConfig;
};
