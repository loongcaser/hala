import * as types from './mutation-types';

// 返回
export const goBack = ({commit}) => {
    return new Promise((resolve, reject) => {
        commit(types.GO_BACK, true);
        resolve(true);
    });
};
