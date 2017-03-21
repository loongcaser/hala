import { HttpPrefix } from '../../../src/api';
import axios from 'axios';

export default {
    getTaskData () { // 获取下拉列表
        let url = HttpPrefix.API + '/common/get-tasks-data';
        return axios.post(url).then(resp => {
            return resp.data;
        });
    }
};
