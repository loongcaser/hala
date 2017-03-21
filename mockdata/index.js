import axios from 'axios';
import { _install, HttpPrefix } from '../src/api';
import modules from './modules';

export const api = {
    login (data) { // 登录
        let url = HttpPrefix.API + '/auth/login';
        return axios.post(url, data).then(resp => {
            return resp.data;
        });
    },
    logout () { // 注销
        let url = HttpPrefix.API + '/auth/logout';
        return axios.post(url).then(resp => {
            return resp.data;
        });
    },
    getContextData () { // 获取上下文信息
        let url = HttpPrefix.API + '/common/context-data/get-context-data';
        return axios.post(url).then(resp => {
            return resp.data;
        });
    },
    ...modules
};

const install = (Vue) => {
    if (install.installed) {
        return;
    }
    _install(Vue, api);
};

export default {
    api,
    install
};
