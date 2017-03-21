import Vue from 'vue';
import {MsgType} from 'common/utils/constants';
import utils from 'common/utils/sysUtils';
import * as types from '../mutation-types'

// initial state
const state = {
    isLogin: false,
    contextData: {},
    menus: [],
    menusMap: {},
};

// getters
const getters = {
    getLoginState : state => {
        return state.isLogin;
    }
};

// actions
const actions = {
    login ({commit}, param) {
        let data = {...param};
        // md5 加密
        data.password = utils.encryptor(data.password);
        return new Promise((resolve, reject) => {
            Vue.api.login(data).then(ret => {
                if (ret.type === MsgType.SUCCESS) {
                    //获取全局上下文
                    Vue.api.getContextData().then(ret2 => {
                        let menusMap = {};
                        let menus = utils.findCheckedMenus(ret2.user.menuTree, menusMap);
                        commit(types.SET_LOGIN_STATE, true);
                        commit(types.SET_MENUS, menus);
                        commit(types.SET_MENUS_MAP, menusMap);
                        commit(types.SET_CONTEXT_DATA, ret2);
                        resolve(ret);
                    });
                    resolve(ret);
                } else {
                    reject(false);
                }
            });
        });
    },
    logout ({commit}) {
        commit(types.SET_LOGIN_STATE, false);
        commit(types.SET_CONTEXT_DATA, {});
        commit(types.SET_MENUS, []);
        commit(types.SET_MENUS_MAP, {});
    }
}

// mutations
const mutations = {
    [types.SET_LOGIN_STATE] (state, value) {
        state.isLogin = value;
    },
    [types.SET_CONTEXT_DATA] (state, value) {
        state.contextData = value;
    },
    [types.SET_MENUS] (state, value) {
        state.menus = value;
    },
    [types.SET_MENUS_MAP] (state, value) {
        state.menusMap = value;
    },
}

export default {
  state,
  getters,
  actions,
  mutations
}
