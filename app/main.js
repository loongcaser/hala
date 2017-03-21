/**
 * Created by longks on 2017/2/23.
 */
import Vue from 'vue';
import Hala from 'hala';
import VueRouter from 'vue-router';
import VueScroll from 'vue-scroll';
import routes from 'common/router/router';
import store from './common/store';
Vue.use(VueScroll);
Vue.use(VueRouter);

/**
 * !! Head up
 * Using sessionStorage, Hala.app.pageContentScrollTop, Hala.app.nextDirection
 * to handle history view transition and preview page position
 *
 */

import sess from './sess'

const beforeEach = (toRoute, fromRoute, next) => {
    const to = toRoute.path;
    const from = fromRoute.path;
    const scrollTop = Hala.app.pageContentScrollTop();

    if (toRoute.matched.some(record => record.meta.requireAuth)) {
        if (!store.state.login.isLogin) {
            next({name: 'login'});
        }
    }

    let h = sess.get(to);
    if (h && h.history) {
        Hala.app.nextDirection('back');
        h.history = false;
        sess.set(to, h)
    } else {
        sess.set(from || '/', {
            history: true,
            scrollTop: scrollTop
        });
        Hala.app.nextDirection('forward')
    }
    next()
};

const afterEach = (toRoute, fromRoute) => {
    const to = toRoute.path;
    const from = fromRoute.path;
    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home') return;

    const h = sess.get(to);
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            Hala.app.pageContentScrollTop(h.scrollTop)
        })
    }
};

// Register beforeEach and afterEach Hooks
Hala.app.setConfig('beforeEach', beforeEach);
Hala.app.setConfig('afterEach', afterEach);

Vue.use(Hala.app, {
    routes: routes
});

