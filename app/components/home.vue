<template lang="html">
    <div class="page" v-tabbar="{'menus': menus, menuColor: '#888', activeMenuColor: '#FF4400', onMenuClick: menuClicked}">
        <router-view></router-view>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                menus: [
                    {
                        iconOn: 'home2',
                        iconOff: 'ion-ios-home-outline',
                        text: '首页',
                        path: '/home/index'
                    },
                    {
                        iconOn: 'shopping-bag',
                        iconOff: 'ion-ios-list-outline',
                        text: '商品',
                        path: '/home/shop'
                    },
                    {
                        iconOn: 'tasks',
                        iconOff: 'ion-ios-medical-outline',
                        text: '头条',
                        path: '/home/headlines'
                    },
                    {
                        iconOn: 'users',
                        iconOff: 'ion-ios-person-outline',
                        text: '我的',
                        path: '/home/mine'
                    }
                ]
            }
        },

        methods: {
            menuClicked(menuIndex) {
                console.log(menuIndex)
            }
        },

        beforeDestroy() {
            $tabbar.$emit('hideTabbar')
        }
    }
</script>
