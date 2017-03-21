import Vue from 'vue';
import api from '../mockdata';
import Components from './components';

// 注册组件
Vue.use(api);
Vue.use(Components);

import Plugin from './plugin';

export default {
    Components,
    app: Plugin
}
