import {MsgType, SystemMode} from '../../src/api/constants';
import Mock from 'mockjs';
import './example';
// 模拟登录数据
Mock.mock(/\/auth\/login/, {
    type: MsgType.SUCCESS, show: true, msg: '登录成功', title: null, bean: null,status:200
});

// 模拟注销数据
Mock.mock(/\/auth\/logout/, {
    type: MsgType.TOLOGIN, show: true, msg: '未登录或者登录超时'
});

// 模拟获取上下文数据
Mock.mock(/\/common\/context-data\/get-context-data/, {
    systemMode: SystemMode.DEVELOPMENT,
    user: {
    userName: '小明',
    oginName: '01',
    id: '1',
    menuTree: [
        {
            id: '1',
            resName: '开心一刻',
            resCode: '1',
            resValue: 'home.happy',
            className:'home-page',
            checked: true
        },
        {
            id: '2',
            resName: '关于我们',
            resCode: '2',
            resValue: 'home.about',
            className:'home-about',
            checked: true
        }
    ]
    }
});
