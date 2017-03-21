import { HttpPrefix } from '../../../src/api';
import axios from 'axios';

export default {
    getMyList (data) { // 获取下拉列表
        let url = HttpPrefix.API + '/common/my-list';
        return axios.post(url, data).then(resp => {
            return resp.data;
        });
    }
};
