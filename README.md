## hala
>  本项目是基于vue的移动端项目

## 技术架构
***
*  es6
*  vue-cli
*  vue
*  axios
*  vue-router
*  vuex
*  sass
*  webpack
*  vue-svg-icon

## Build Setup

``` bash
本地调试启动：

# install dependencies
第一步：npm install（
           或者用淘宝的cnpm代理安装会更快，方法是：
             1.安装cnpm：npm install -g cnpm --registry=https://registry.npm.taobao.org 
             2.用cnpm代理npm安装： cnpm install
       ）

# serve with hot reload at localhost:8088
第二步：npm run dev

打包：
# build for production with minification
npm run build
查看方式
http://localhost:端口号/dist/index.html
```

## 目录结构
***
<pre>
├── build
│   ├── build.js //生成环境服务配置
│   ├── check-versions.js //package.json模块列表版本号的映射
│   ├── dev-client.js // 启动开发环境浏览器端的热加载
│   ├── dev-server.js //开发环境服务配置
│   ├── utils.js //解析css预编译文件
│   ├── webpack.base.conf.js //构建工具基础配置
│   ├── webpack.dev.conf.js //构建工具生成开发环境代码的配置
│   └── webpack.prod.conf.js //构建工具生成生产环境代码的配置
├── config
│   ├── dev.env.js //开发环境配置
│   ├── index.js //开发、生成环境服务及代理服务配置
│   └── prod.env.js //生成环境服务地址配置
├── dist  //项目build目录
├── node_modules //项目中安装的依赖模块
├── app //业务层代码
│   ├── common //公共资源
│   │   ├── libs // 第三方插件
│   │   ├── router // 项目公共路由
│   │   │   └── router.js // 路由配置
│   │   ├── scss // 项目公共样式
│   │   └── utils // 项目公共工具类方法
│   ├── components
│   │   ├── modules // 项目业务
│   │   ├── home.vue // 业务路由入口
│   │   ├── index.vue // 登录时过渡入口
│   │   ├── login.vue // 登录入口
│   │   └── not-found.vue // 404状态页面
│   ├── store //Vuex状态管理
│   │   ├── actions.js // 触发Vuex状态
│   │   ├── getters.js // 获取Vuex状态
│   │   ├── index.js // 定义Vuex接口
│   │   └── mutation-types.js// Vuex状态资源
├── mockdata //模拟调试接口
│   ├── mock_data //模拟数据
│   │   ├── api.mock.js // 测试api接口文件
│   │   └── index.js // 模拟数据的入口文件，所有模块对应的模拟数据都在这里引入
│   ├── modules// 是用来存放各个模块api接口文件
│   │   ├── index.js // 入口文件，所有模块api接口文件都有在这里引入
│   │   └── test.api.js // 测试api接口文件
│   └── index.js //api的入口文件，这里配置了系统的api请求和加载了各个模块的api
├── src  //框架层代码
│   ├── api  //组件
│   │   ├── api.config.js //api的配置文件，这里配置了http请求的拦截器
│   │   └── index.js //api的安装入口，实现使用Vue.use(api)注入api，全局可以使用Vue.api.xxx调用
│   ├── components  //组件
│   │   ├── module // 项目业务
│   │   ├── example // 开发参考
│   │   ├── home // 业务路由入口
│   │   ├── login // 登录入口
│   │   └── not-found.vue // 404状态页面
│   ├── services  //组件依赖服务
│   │   ├── ... // 组件服务
│   │   └── utils.js // 底层服务工具类方法
│   ├── svg  // svg图标方案
│   │   ├── ... // svg图标文件
│   │   └── index.js // svg配置文件
│   ├── index.js // 系统根组件入口
│   ├── plugin.js // 加载底层基础服务并拉起应用
│   └── hala.js // 系统入口文件，系统启动时，从这里加载公共配置文件、插件、ui组件
├── static //这里是存放静态资源的地方，在build之后会生成dist文件夹，这个文件夹中的文件会原封不动放进去
├── .babelrc //webpack插件babel的设置
├── .editorconfig //这是atom编辑器生成的配置文件，在各个项目中可以自由配置
├── .eslintrc //Eslint的配置文件，在这里配置代码的检测规则等
├── .eslintignore //使用eslint检测代码是否符合规则的忽略目录，用于eslint设置
├── .gitignore //使用Git版本管理时需要忽略的目录，用于git设置
├── index.html //项目生成后的入口页面，因为vue默认是使用单页面的，所以在webpack中同时也只有这一个入口
├── package.json //nodejs的配置
└── README.md //说明文件
