<template>
    <div class="page has-navbar has-tabbar"
         v-nav="{
          title: '主页',
          showBackButton: false,
          scrcolled: false,
          showMenuButton: true,
          menuButtonText: menuButtonText,
          onMenuButtonClick: toggleSidebar,
          showMenu: false
        }"
         v-tabbar-menu-index="0">
        <gs-menu :show="showMenu" @showMenus="toggleSidebar"></gs-menu>
        <div class="page-content" v-scroll="onScroll">
            <!--<gs-swiper ref="swiper" direction="horizontal" width="100%" height="150" pager-color="#ea5a49" pager-bg-color="#e5e4e3">
                <gs-swiper-item>
                    <img src="../../assets/images/swiper/1.jpg">
                </gs-swiper-item>
                <gs-swiper-item>
                    <img src="../../assets/images/swiper/2.jpg">
                </gs-swiper-item>
                <gs-swiper-item>
                    <img src="../../assets/images/swiper/3.jpg">
                </gs-swiper-item>
            </gs-swiper>-->
            <div class="page-swipe">
                <gs-swipe :auto="5000">
                    <gs-swipe-item class="slide1">
                        <img src="../../assets/images/swiper/1.jpg">
                    </gs-swipe-item>
                    <gs-swipe-item class="slide2">
                        <img src="../../assets/images/swiper/2.jpg">
                    </gs-swipe-item>
                    <gs-swipe-item class="slide3">
                        <img src="../../assets/images/swiper/3.jpg">
                    </gs-swipe-item>
                </gs-swipe>
            </div>

            <div style="text-align: center;">
                <div class="card-container">
                    <!--<icon name="chameleon" :scale="20" id="animation"></icon>-->
                    <gs-card v-for="(task, index) in tasks" :key = "task.tid"
                             :style="{backgroundColor: task.status === '1' ? 'white': 'rgb(255, 239, 201)' }">
                        <gs-card-item type="content">
                            <gs-list type="media">
                                <li class="item-content">
                                    <gs-list-item type="media">
                                        <img src="../../assets/images/girl.png" width="44">
                                        <i class="icon icon-home"></i>
                                    </gs-list-item>
                                    <gs-list-item type="inner">
                                        <gs-list-item type="title-row">
                                            <gs-list-item type="text">{{task.title}}</gs-list-item>
                                            <gs-list-item type="text">{{task.created}}</gs-list-item>
                                        </gs-list-item>
                                    </gs-list-item>
                                </li>
                            </gs-list>
                        </gs-card-item>
                        <gs-card-item type="footer" >
                            <div style="color:gray">
                                赞助商：{{task.advertiser}}
                                <span style="margin-left: 1rem;padding: .1rem;" :style="{color: task.status === '1' ? 'green': 'gray' }">{{task.status === '0' ? '结束' : '已领'}}</span>
                            </div>
                            <span :style="{color: task.status === '1' ? 'orange': 'gray',fontWeight:'bold'}">{{task.read_profit | currency}} 积分</span>
                        </gs-card-item>
                    </gs-card>
                </div>
                <div class="wrap">
                    <button class="button button-assertive button-block" @click="logout()">退出登录</button>
                </div>
            </div>

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue';
    import GsCard from 'components/card/card';
    import GsCardItem from 'components/card/card-item';
    import GsList from 'components/list/list';
    import GsListItem from 'components/list/list-item';

    import GsSwipe from 'components/swipe/swipe';
    import GsSwipeItem from 'components/swipe/swipe-item';

    import { currency } from '../../common/filter/currency'
    Vue.filter('currency', currency)

    export default {
        components: {
            GsCard,
            GsCardItem,
            GsList,
            GsListItem,

            GsSwipe,
            GsSwipeItem
        },
        data: function(){
            return {
                position: {scrollTop: 0, scrollLeft: 0},

                menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
                sidebar: undefined,
                sidebarRight: undefined,
                showMenu: false,
                tasks: [],

                id: 0
            }
        },
        created() {

        },
        computed: {
            length () {
                return this.tasks.length
            }
        },
        mounted() {
            this.getData();
        },
        create(){
        },
        methods: {
            logout() {
                $router.back({ name:'login'})
                this.$api.logout();
            },
            toggleSidebar() {
                this.showMenu = !this.showMenu;
            },
            next() {
                this.$refs.swiper.next()
            },
            prev() {
                this.$refs.swiper.prev()
            },
            getData(){
                this.$api.getTaskData().then(ret=>{
                    this.tasks = this.tasks.concat(ret.data);
                });
            },
            onScroll:function(e, position){
                this.position = position;
                if(this.position.scrollTop>100){
                    document.querySelector('[ha-nav]').classList.add('opacity');
                }else{
                    document.querySelector('[ha-nav]').classList.remove('opacity')
                }
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "scss/common";
    @import "scss/layout";

    html,body{
        width:100%;
        height:100%;
        overflow: scroll;
    }

    .opacity{
        background-color: rgba(255,255,255,0.1);
        transition:background-color 0.3s linear;
        -webkt-transition:background-color 0.3s linear
    }
    .page-swipe{
        color: #fff;
        .mint-swipe {
            height: 150px;
            color: #fff;
            font-size: 30px;
            text-align: center;
            margin-bottom: 20px;
        }
        .mint-swipe-item {
            line-height: 150px;
        }
        .slide1 {
            background-color: #0089dc;
        }
        .slide2 {
            background-color: #ffd705;
        }
        .slide3 {
            background-color: #ff2d4b;
        }
    }

    #animation {
        animation: changeColor 5s infinite step-end;
    }
    @keyframes changeColor {
        0% {
            color: red;
        }
        20% {
            color: yellow;
        }
        40% {
            color: blue;
        }
        60% {
            color: green;
        }
        80% {
            color: purple;
        }
        100% {
            color: gold;
        }
    }

</style>
