<template>
    <nav class="bar bar-tab" v-if="isIndex">
        <slot></slot>
    </nav>
</template>

<script type="text/ecmascript-6">
  import config from '../config';
  export default {
      name: config.prefix + 'Footer',
      props:{
          isIndex: {
          type: Boolean,
          default:true
      }
    },
    data (){
        return {

        }
    },
    methods: {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
    @import "../scss/_mixin.scss";
    .tab-item.active {
        color:  #ed8e07 !important;
    }
    .tab-item.inactive {
    }
    .bar {
        position: fixed;
        right: 0;
        left: 0;
        z-index: 50;
        height: 2.2rem;
        padding-right: 0.5rem;
        padding-left: 0.5rem;
        background-color: #fff;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        box-sizing: content-box;
        border-top: 1px solid #d6d6d6;
    }
    .bar:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        right: auto;
        top: auto;
        height: 1px;
        width: 100%;
        background-color: #ccc;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        .bar:after {
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        .bar:after {
            -webkit-transform: scaleY(0.33);
            transform: scaleY(0.33);
        }
    }
    .bar-nav {
        top: 0;
    }
    .title {
        position: absolute;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0 -0.5rem;
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 2.2rem;
        color: #3d4145;
        text-align: center;
        white-space: nowrap;
    }
    .title a {
        color: inherit;
    }
    .bar-tab {
        bottom: 0;
        width: 100%;
        height: 2.5rem;
        padding: 0;
        table-layout: fixed;
    }
    .bar-tab:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: auto;
        right: auto;
        height: 1px;
        width: 100%;
        background-color: #e7e7e7;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 50% 0%;
        transform-origin: 50% 0%;
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 2) {
        .bar-tab:before {
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
        }
    }
    @media only screen and (-webkit-min-device-pixel-ratio: 3) {
        .bar-tab:before {
            -webkit-transform: scaleY(0.33);
            transform: scaleY(0.33);
        }
    }
    .bar-tab:after {
        display: none;
    }
    .bar-tab .tab-item {
        position: relative;
        display: table-cell;
        width: 1%;
        max-width: 100%;
        height: px2rem(80);;
        color: #07565a;
        text-align: center;
        vertical-align: middle;
    }
    .bar-tab .tab-item.active, .bar-tab .tab-item:active {
        /*color: #0894ec;*/
        color: rgb(216, 65, 65);
    }
    .bar-tab .tab-item .icon {
        top: px2rem(1);
        height: 1.2rem;
        font-size: 1.2rem;
        line-height: 1.2rem;
        padding-top: 0;
        padding-bottom: 0;
    }
    .bar-tab .tab-item .icon ~ .tab-label {
        display: block;
        font-size: 0.75rem;
        position: relative;
        bottom: px2rem(1);
    }
    .bar .icon {
        position: relative;
        z-index: 20;
        padding: .5rem .1rem;
        font-size: 1rem;
        line-height: 1.2rem;
    }
    .bar .title .icon {
        padding: 0;
    }
    .bar .title .icon.icon-caret {
        top: 0.2rem;
        margin-left: -0.25rem;
    }
    .bar input[type="search"] {
        height: 1.45rem;
        margin: 0.3rem 0;
    }
</style>
