import Mock from 'mockjs';

// 模拟首页列表数据
Mock.mock(/\/common\/get-tasks-data/,{
    "code": 200,
    "message": "获取成功",
    "data": [
        {
            "tid": "1",
            "title": "今天天气不错啊",
            "thumbnail": "adv.jpg",
            "advertiser": "abc1",
            "read_profit": "8.567",
            "type": "0",
            "status": "1",
            "created": "1452139945"
        },
        {
            "tid": "2",
            "title": "明天终于开年会了，哈哈",
            "thumbnail": "adv.jpg",
            "advertiser": "abc2",
            "status": "0",
            "type": "1",
            "read_profit": "5.324",
            "created": "1452094126"
        }
    ]
});
