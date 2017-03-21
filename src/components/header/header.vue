<template>
    <div :class="pageObj.className" class="ux-header">
        <div class="page-cover" v-if="showMenu" @click="showMenus"></div>
        <div class="nv-toolbar">
            <div class="toolbar-back" @click="goBack">
                <i class="icon icon-angle-left"></i>
            </div>
            <div class="toolbar-nav" @click="showMenus">
                <i class="icon iconfont">&#xe726;</i>
            </div>
            <span class="page-text" v-text="pageObj.text"></span>
        </div>
        <gs-menu :show="showMenu" @showMenus="showMenus"></gs-menu>
    </div>
</template>
<script type="text/ecmascript-6">
    import config from '../config';
    export default {
        name: config.prefix + 'Header',
        props:{
            pageObj: {
                className: '',
                text:''
            },
            showMenu: {
                type: Boolean
            }
        },
        data (){
            return {

            }
        },
        methods: {
            showMenus (){
                this.$emit('showMenus');
            },
            goBack (){
                this.$emit('goBack');
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/mixin";
    .ux-header {
        /*max-width: 700px;*/
        &.header-hide{
            .toolbar-nav,.toolbar-back{
                display: none;
            }
        }
    }
    .nv-toolbar {
        height: px2rem(86);
        /*max-width: 700px;*/
        width: 100%;
        background-color: rgba(255, 255, 255, 0.95);
        position: fixed;
        top: 0;
        left: 0;
        -webkit-transition: all .3s ease;
        transition: all .3s ease;
        box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
        z-index: 6;
        .toolbar-nav {
            height: px2rem(84);
            width: px2rem(80);
            display: inline-block;
            line-height: px2rem(80);
            background-size: 19px 16px;
            position: absolute;
            top: 0;
            right: 0;
            text-align: center;
            z-index:99;
            i {
                font-size: 30px;
                color: #1c8062;
            }
        }

        .toolbar-back {
            height: px2rem(84);
            width: px2rem(80);
            display: inline-block;
            padding-left: 0.2rem;
            background-size: 19px 16px;
            position: absolute;
            top: 0;
            left: 0;
            text-align: left;
            z-index:99;
            i {
                font-size: 40px;
                line-height: 2.5rem;
                color: #1c8062;
            }
        }

        .page-text {
            display: block;
            text-align: center;
            height: 100%;
            line-height: px2rem(86);
            font-size: 16px;
            width: 100%;
            position: relative;
            z-index: 0;
        }

    }
    .page-cover {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        z-index: 7;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2) {

    }
    @media only screen and (-webkit-min-device-pixel-ratio: 3) {

    }
</style>
