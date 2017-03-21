import './api.config';

// 扩展api接口
export const _install = (Vue, api) => {
    Vue.api = api;

    Object.defineProperties(Vue.prototype, {
        $api: {
            get () {
                return api;
            }
        }
    });
};

/**
 * 请求的前缀
 * @type {{API: string}}
 */
export const HttpPrefix = {
    API: '/api'
};
