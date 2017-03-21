// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path');

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 8088,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        mockData:true,// 是否开启模拟数据
        proxyTable: {
            '/api': {
                //target: 'http://japi.juhe.cn', //api代理服务器地址http://ip:port
                target:'http://localhost:8088',
                changeOrigin: true,
                projectName: '',
                pathRewrite: {
                    '^/api': '/'
                }
            },
            '/dagoogle': {
                target: 'http://api.dagoogle.cn',
                changeOrigin: true,
                projectName:'',
                pathRewrite: {
                    '^/dagoogle': '/'
                }
            }

        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
};
