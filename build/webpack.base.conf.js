var path = require('path');
var webpack = require('webpack');
var config = require('../config');
var utils = require('./utils');
var projectRoot = path.resolve(__dirname, '../');

var env = process.env.NODE_ENV;
// check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap);
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap);
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd;

module.exports = {
    entry: {
        app: './app/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js','.vue', '.css', '.scss'],
        modules: [
            path.resolve(__dirname, '../node_modules')
        ],
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'hala': path.resolve(__dirname, '../src/index.js'),
            'src': path.resolve(__dirname, '../src'),
            'components': path.resolve(__dirname, '../src/components'),
            'app': path.resolve(__dirname, '../app'),
            'common': path.resolve(__dirname, '../app/common'),
            'mockdata': path.resolve(__dirname, '../mockdata'),
            'vue-scroller': path.resolve(__dirname, '../src/components/scroller/vue-scroller')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    },
                    //postcss: [require('postcss-cssnext')()]
                    postcss: [
                        require('precss')({
                            addDependencyTo: webpack
                        }),
                        require('autoprefixer')({
                          browsers: ['last 2 versions']
                        })
                    ]
                }
            },
            {
                test: /\.css$/,
                loader:[
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ],
                //loader: "postcss-loader!style!css?modules&localIdentName=[local]-[hash:base64:5]"
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            {
                test: /vue-scroller.src.*?js$/,
                loader: 'babel-loader!vue-loader'
            }
        ]
    }
};
