import Vue from 'vue';
import axios from 'axios'
import {MsgType} from './constants';
import router from '../../app/common/router/router';
import Store from '../../app/common/store';
axios.defaults.timeout = 10000;
axios.defaults.credentials = false;

let config = require('../../config');

if (process.env.NODE_ENV === 'development' && config.dev.mockData) {
    require('../../mockdata/mock_data');
}

let apiRootMap = {};

if (process.env.NODE_ENV === 'production' && config.build.env.apiRootMap) {
    apiRootMap = config.build.env.apiRootMap;
} else {
    if (config.dev.proxyTable) {
        let proxyTable = config.dev.proxyTable;
        Object.keys(proxyTable).forEach(function (context) {
            apiRootMap[context] = context +
                (proxyTable[context]['projectName'] ? '/' + proxyTable[context]['projectName'] : '');
        });
    }
}

const genPath = (path) => {
    let rootPath = '/' + path.split('/')[1];
    if (apiRootMap[rootPath]) {
        return path.replace(rootPath, apiRootMap[rootPath]);
    } else {
        return '';
    }
};

// 请求拦截
axios.interceptors.request.use((config ) => {
    if (!Store.state.login.isLogin) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.url = genPath(config.url);
        config.headers.Authorization = `token ${Store.state.isLogin}`;
    }
    return config;
});

// code状态码200判断
axios.interceptors.response.use((res) => {

    let ret = res.data;
    // 如果是模拟数据，把字符串转换成对象
    if (process.env.NODE_ENV === 'development' && config.dev.mockData && typeof ret === 'string') {
        ret = JSON.parse(ret);
        res.data = ret;
    };

    if (ret.type && ret.type === MsgType.TOLOGIN) {
        // 注销登录状态
        Store.dispatch('logout').then(ret => {
            $toast.show('注销登录');
            router.push({name: 'login'});
            return {...res.data, ok: false};
        });
    } else if (ret.show === true) {
        // 登录成功
        $toast.show(res.data.msg);
    }

    if (res.status === 654) { // 请求超时检测
        window.alert('请求超时！')
    }

    if (res.status !== 200) {
        window.alert('数据返回有误')
        return Promise.reject(res)
    }

    return res
}, (error) => {
    console.log('promise error:' + error)
    return Promise.reject(error)
});

Vue.prototype.$http = axios;


