/**
 * Created by longks on 2017/2/24.
 */

const routes = [
    {
        path: "/",
        name: "index",
        component: (resolve) => {
            require(["app/components/index.vue"], resolve);
        }
    },
    {
        path: "/login",
        name: "login",
        component: (resolve) => {
            require(["app/components/login.vue"], resolve);
        }
    },
    {
        path: "/home",
        name: "home",
        component: (resolve) => {
            require.ensure([], () => resolve(require("../../components/home.vue")), "home");
        },
        meta: { requireAuth: true},
        children: [
            {
                path: "index",
                name: "home.index",
                component: (resolve) => {
                    require(["../../components/modules/index.vue"], resolve);
                }
            },
            {
                path: "shop",
                name: "home.shop",
                component: (resolve) => {
                    require(["../../components/modules/shop.vue"], resolve);
                }
            },
            {
                path: "headlines",
                name: "home.headlines",
                component: (resolve) => {
                    require(["../../components/modules/headlines.vue"], resolve);
                }
            },
            {
                path: "mine",
                name: "home.mine",
                component: (resolve) => {
                    require(["../../components/modules/mine.vue"], resolve);
                }
            },
            {
                path: "user",
                name: "home.user",
                component: (resolve) => {
                    require(["../../components/modules/user.vue"], resolve);
                }
            }
        ]
    },
    {
        path: "*",
        redirect: "/login"
    }
];

export default routes;
