import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import login from './modules/login'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * 整合初始状态和变更函数，我们就得到了我们所需的 store
 * 至此，这个 store 就可以连接到我们的应用中
 */
export default new Vuex.Store({
    actions,
    getters,
    modules: {
        login
    },
    strict: debug
});
