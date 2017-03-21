module.exports = {
  NODE_ENV: '"production"',
    // 使用此配置，会对所有的api请求的跟路径进行替换，
    // 比如/api/common/get-data => http://192.168.0.104/guoshou/common/get-data
    apiRootMap: {
        '/api': 'http://192.168.0.104/guoshou'
    }
}
