module.exports = {
    production: {
        devtool: false,
        NODE_ENV: 'production',
        API_DOMAIN: 'https://www.meitu.com/api/',
        ORIGIN_URL: 'https://www.meitu.com/mobile_html',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        staticPath: 'https://js.app.meitudata.com/',
        cssPath: 'https://css.app.meitudata.com/',
        imgPath: 'https://img.app.meitudata.com/',
        ACCOUNT_DOMAIN: 'https://account.meitu.com',
        ACCOUNT_LOGIN: 'https://account.meitu.com/#!/logout/relogin?client_id=1089867664',
        ACCOUNT_WEBVIEW: 0,
        ACCOUNT_JS_SDK: 'https://js.app.meitudata.com/account/js-sdk/mt.account.js',
        ACCOUNT_CALLBACK: 'https://www.meitu.com/services/callback.html',
        CART_DOMAIN: 'https://cart.meitu.com',
        filenameHash: true,
    },
    pre: {
        devtool: false,
        NODE_ENV: 'test',
        API_DOMAIN: 'http://prewww.meitu.com/api/',
        ORIGIN_URL: 'http://prewww.meitu.com/mobile_html',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        staticPath: 'http://prejs.app.meitudata.com/',
        cssPath: 'http://precss.app.meitudata.com/',
        imgPath: 'http://preimg.app.meitudata.com/',
        ACCOUNT_DOMAIN: 'http://preaccount.meitu.com',
        ACCOUNT_LOGIN: 'http://preaccount.meitu.com/#!/logout/relogin?client_id=1089867664',
        ACCOUNT_WEBVIEW: 1,
        ACCOUNT_JS_SDK: 'http://prestatic.account.meitu.com/js-sdk/mt.account.js',
        ACCOUNT_CALLBACK: 'http://prewww.meitu.com/services/callback.html',
        CART_DOMAIN: 'http://precart.meitu.com',
        filenameHash: true,
    },
    test: {
        devtool: false,
        NODE_ENV: 'test',
        API_DOMAIN: 'http://testwww.meitu.com/api/',
        ORIGIN_URL: 'http://testwww.meitu.com/mobile_html',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        staticPath: '//testjs.app.meitudata.com/',
        cssPath: '//testcss.app.meitudata.com/',
        imgPath: '//testimg.app.meitudata.com/',
        ACCOUNT_DOMAIN: 'http://preaccount.meitu.com',
        ACCOUNT_LOGIN: 'http://preaccount.meitu.com/#!/logout/relogin?client_id=1089867664',
        ACCOUNT_WEBVIEW: 1,
        ACCOUNT_JS_SDK: 'http://prestatic.account.meitu.com/js-sdk/mt.account.js',
        ACCOUNT_CALLBACK: 'http://testwww.meitu.com/services/callback.html',
        CART_DOMAIN: 'http://testcart.meitu.com',
        // 生成带hash文件名
        filenameHash: false,
    },
    local: {
        // 开发 devServer 端口
        devtool: false,
        NODE_ENV: 'local',
        API_DOMAIN: 'http://localwww.meitu.com/api/',
        ORIGIN_URL: 'http://localwww.meitu.com/mobile_html',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        staticPath: '//localjs.app.meitudata.com/',
        cssPath: '//localcss.app.meitudata.com/',
        imgPath: '//localimg.app.meitudata.com/',
        ACCOUNT_DOMAIN: 'http://preaccount.meitu.com',
        ACCOUNT_LOGIN: 'http://preaccount.meitu.com/#!/logout/relogin?client_id=1089867664',
        ACCOUNT_WEBVIEW: 1,
        ACCOUNT_JS_SDK: 'http://prestatic.account.meitu.com/js-sdk/mt.account.js',
        ACCOUNT_CALLBACK: 'http://localwww.meitu.com/services/callback.html',
        CART_DOMAIN: 'http://localcart.meitu.com',
        filenameHash: false,
    },
    development: {
        // 开发 devServer 端口
        port: 8088,
        devtool: 'source-map',
        NODE_ENV: 'development',
        ORIGIN_URL: 'http://pages.meitu.com',
        API_DOMAIN: 'http://localwww.meitu.com/api/',
        jsSourceMap: false,
        cssSourceMap: false,
        eslint: false,
        staticPath: 'http://assets.meitu.com/pc/',
        cssPath: '',
        imgPath: '/',
        ACCOUNT_DOMAIN: 'http://preaccount.meitu.com',
        ACCOUNT_LOGIN: 'http://preaccount.meitu.com/#!/logout/relogin?client_id=1089867664',
        ACCOUNT_WEBVIEW: 1,
        ACCOUNT_JS_SDK: 'http://prestatic.account.meitu.com/js-sdk/mt.account.js',
        ACCOUNT_CALLBACK: 'http://localwww.meitu.com/services/callback.html',
        CART_DOMAIN: 'http://localcart.meitu.com',
        filenameHash: false,
    }
};
