<template>
    <div>
        <div class="page-cover" :class="{'showBack': show}"  @click="showMenus"></div>
        <div class="nav-list menu-list" :class="{'show': show}">
            <div class="menu-header">
                <img class="menu-avatar" src="./img/user.png">
                <div class="menu-title">vue2.0 && 国寿项目</div>
            </div>
            <div class="menu-ul">
                <router-link class="icon-quanbu iconfont menu-item border-1px" active-class="activeMenuColor" :to="{name:'home.shop'}">
                    <div class="menu-icon">
                        <i class="icon iconfont ion-social-nodejs"></i>
                    </div>
                    <span class="menu-text">商品列表</span>
                </router-link>
                <router-link class="icon-quanbu iconfont menu-item border-1px" active-class="activeMenuColor" :to="{name:'home.headlines'}">
                    <div class="menu-icon">
                        <i class="icon iconfont ion-navicon"></i>
                    </div>
                    <span class="menu-text">头条动态</span>
                </router-link>
                <router-link class="icon-quanbu iconfont menu-item border-1px" active-class="activeMenuColor" :to="{name:'home.user'}">
                    <div class="menu-icon">
                        <i class="icon iconfont ion-ios-gear-outline"></i>
                    </div>
                    <span class="menu-text">我的资料</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import config from '../config';
    export default {
        name: config.prefix + 'Menu',
        props:{
            show: {
                type: Boolean,
                default: false
            }
        },
        data (){
            return {

            }
        },
        methods: {
            showMenus (){
                this.$emit('showMenus');
            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "../scss/_mixin";
    .page-cover {
        position: fixed;
        display: none;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        z-index: 22;
        &.showBack{
            display: block;
        }
    }
    .menu-list{
        position :fixed;
        top:0;
        bottom:0;
        flex: 0 0 250px;
        left: -250px;
        width :250px;
        background-color: #22262a;
        color :#313131;
        transition :all .3s ease;
        z-index :99;
        .menu-header {
            width: 100%;
            height: 180px;
            background-color: #262d30;
            .menu-avatar {
                width: 40%;
                height: auto;
                border-radius: 50%;
                margin: 20px 70px;
            }
            .menu-title {
                font-size: 14px;
                color: #ffffff;
                line-height: 28px;
                font-weight: 500;
                text-align: center;
            }
        }
        &.show {
            transform: translateX(250px);
        }
        .menu-ul {
            margin: 0;
            overflow: hidden;
            padding: 0;
            .activeMenuColor{
                color: #FF4400!important;
                .menu-icon {
                    .iconfont{
                        color: #FF4400!important;

                    }
                }
            }
            .menu-item {
                display: block;
                font-size: 14px;
                padding: 10px 13px;
                text-align: left;
                text-indent: 1px;
                line-height: 15px;
                color: #a6adb3;
                font-weight: 700;
                @include border-1px(#40474a);
                &:last-child {
                    margin-bottom: 50px;
                }
                &:before {
                    color: #2c3e50;
                    .line {
                        border-top: 1px solid #d4d4d4;
                    }
                }
                .menu-icon {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-color: #383c40;
                    border-radius: 50%;
                    vertical-align: top;
                    text-align: center;
                    .iconfont {
                        color: #999999;
                        line-height: 30px;
                        font-weight: 700;
                    }
                    &.active {
                        color: #01aef3;
                        .menu-icon {
                            background-color: #01aef3;
                            .iconfont {
                                color: #ffffff;
                            }
                        }
                    }
                }
                .menu-text {
                    display: inline-block;
                    font-size: 15px;
                    line-height: 32px;
                    vertical-align: top;
                    margin-left: 10px;
                    font-weight: 700;
                }
                .menu-new {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    background-color: #d81229;
                    border-radius: 50%;
                    vertical-align: top;
                    text-align: center;
                    float: right;
                    span {
                        color: #ffffff;
                        font-size: 15px;
                        line-height: 30px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
</style>
