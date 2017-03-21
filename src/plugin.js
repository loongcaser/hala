/**
 * Created by longks on 2017/2/21.
 */
import assign from 'object-assign';
import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
Vue.use(VueRouter);

//组件要依赖的底层服务
import './services/backdrop';
import './services/loading';
import './services/popup/index';
import './services/tabbar/index';
import './services/cascadepanel/index';
import './services/sidebar/index';

import store from 'common/store';
import GsApp from './components/app/index';

const defaultRouterOptions = {
    base: '/',
    linkActiveClass: 'router-link-active',
    mode: 'hash',
    scrollBehavior: undefined
};

let HalaAppConfig = {
    // Router Global Guards
    beforeEach: undefined,
    afterEach: undefined,

    // Router Options
    routerOptions: {},
    pushMethod: 'push'
};

const nextDirection = (direction) => {
    let el = document.querySelector('[gs-app]');
    if (el) el.setAttribute('transition-direction', direction);
};

const setTitle = (title) => {
    let el = document.querySelector('[ha-nav] > .center > .title')
    if (el) el.textContent = title
};

class HalaApp {
    constructor(options) {
        this.routes = options.routes
    }

    start() {
        const App = Vue.extend(GsApp);

        let routerOptions = assign(
            {},
            defaultRouterOptions,
            HalaAppConfig.routerOptions,
            {
                routes: this.routes
            }
        );

        const router = new VueRouter(routerOptions);

        // set router global guards
        if (typeof HalaAppConfig.beforeEach == 'function')
            router.beforeEach(HalaAppConfig.beforeEach);
        if (typeof HalaAppConfig.afterEach == 'function')
            router.afterEach(HalaAppConfig.afterEach);

        const app = new Vue({
            router,
            store, // （缩写）相当于 store:store
            components: {
                GsApp
            },
            methods: {
                setTitle: setTitle
            },
            render: h => h(GsApp)
        }).$mount('gs-app');

        window.$app = app;

        let pushMethod = HalaAppConfig.pushMethod;
        router['_' + pushMethod] = router[pushMethod];

        router.forward = router[pushMethod] = (target) => {
            if (window.__block_touch__) return;
            nextDirection('forward');
            setTimeout(() => { router['_' + pushMethod](target) })
        };

        router.back = (target) => {
            if (window.__block_touch__) return;
            nextDirection('back');
            setTimeout(() => { router['_' + pushMethod](target) })
        };

        window.$router = router
    }
}

export default {
    install(Vue, options) {
        let app = new HalaApp(options);
        app.start();

        /* 类似的这种兼容性代码, 暂时放在这个位置 */
        /* for iOS 10, users can now pinch-to-zoom even when a website sets user-scalable=no in the viewport. */
        document.documentElement.addEventListener('touchstart', (e) => {
            if (e.touches.length > 1) {
                e.preventDefault()
            }
        }, false);

        /* iOS Safari - Disable double click to zoom */
        if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            let lastTouchEnd = 0;
            document.documentElement.addEventListener('touchend', (e) => {
                let now = (new Date()).getTime();
                if (now - lastTouchEnd < 300) {
                    e.preventDefault()
                }
                lastTouchEnd = now
            }, false)
        }

        FastClick.attach(document.body)
    },

    setConfig(name, value) {
        if (['beforeEach', 'afterEach', 'routerOptions', 'pushMethod'].indexOf(name) == -1) throw 'Unknown config name.'
        if (name == 'pushMethod' && value != 'push' && value != 'replace') throw 'Wrong value for config [pushMethod]'
        HalaAppConfig[name] = value
    },

    getConfig(name) {
        if (['beforeEach', 'afterEach', 'routerOptions', 'pushMethod'].indexOf(name) == -1) throw 'Unknown config name.'
        return HalaAppConfig[name]
    },

    nextDirection: nextDirection,

    root() {
        return document.querySelector('[gs-app]')
    },

    pageContentScrollTop(scrollTop) {
        const root = document.querySelector('[gs-app]');
        if (typeof scrollTop == 'number') {
            const content = root && root.querySelectorAll('.page .page-content')[1];
            if (content) {
                content.scrollTop = scrollTop
            }
        } else {
            return root && root.querySelector('.page .page-content')
                ? root.querySelector('.page .page-content').scrollTop
                : 0
        }
    }
}
