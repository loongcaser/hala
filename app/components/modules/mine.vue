<template>
    <div class="page has-navbar has-tabbar"
         v-nav="{
          title: '我的',
          showBackButton: true,
          showMenuButton: true,
          menuButtonText: menuButtonText,
          onMenuButtonClick: toggleSidebar,
          showMenu: false
        }"
         v-tabbar-menu-index="3">
        <gs-menu :show="showMenu" @showMenus="toggleSidebar"></gs-menu>
        <div class="page-content padding-top" v-scroll="onscroll">
            <gs-card>
                <gs-card-item type="header">卡头</gs-card-item>
                <gs-card-item type="content">
                    <gs-card-item type="content-inner">
                        这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
                    </gs-card-item>
                </gs-card-item>
                <gs-card-item type="footer">卡脚</gs-card-item>
                </gs-card>
                <gs-card>
                    <gs-card-item type="content">
                        <gs-card-item type="content-inner">
                            这是一个用纯文本的简单卡片。但卡片可以包含自己的页头，页脚，列表视图，图像，和里面的任何元素。
                        </gs-card-item>
                    </gs-card-item>
                </gs-card>
                <gs-card>
                    <gs-card-item
                        type="header"
                        valign="bottom"
                        class-name="color-white no-border no-padding">
                        <img class='card-cover' src="../../assets/images/swiper/1.jpg" alt="">
                    </gs-card-item>
                    <gs-card-item type="content">
                        <gs-card-item type="content-inner">
                            <p class="color-gray">发表于 2015/01/15</p>
                            <p>此处是内容...</p>
                        </gs-card-item>
                    </gs-card-item>
                    <gs-card-item type="footer">
                        <a href="#" class="link">赞</a>
                        <a href="#" class="link">更多</a>
                    </gs-card-item>
                </gs-card>
                <gs-card>
                <gs-card-item type="content">
                    <div class="list-block">
                        <ul>
                            <li>
                                <router-link class="item-link item-content" :to="{name:'home.user'}">
                                    <span class="item-media"><i class="icon icon-f7"></i></span>
                                    <span class="item-inner">
                                        <span class="item-title">去往我的资料</span>
                                    </span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </gs-card-item>
            </gs-card>
            <gs-go-top :show="show" :bottom="80" @goTop="goTop"/>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import GsCard from 'components/card/card';
    import GsCardItem from 'components/card/card-item';
    export default {
        components: {
            GsCard,
            GsCardItem
        },
        data() {
            return {
                menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
                sidebar: undefined,
                sidebarRight: undefined,
                showMenu: false,
                show: false
            }
        },
        mounted() {

        },
        methods:{
            toggleSidebar() {
                this.showMenu = !this.showMenu;
            },
            onscroll(e, position) {
                this.position = position;
                if(this.position.scrollTop>100){
                    this.show = true;
                }else{
                    this.show = false;
                }
            },
            goTop(){
                document.querySelector('div.page-content').scrollTop = 0;
                this.show = false
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import './scss/layout';
</style>
