<template>
    <icon name="circle-up" :scale="80" v-if="show" @click.native="goTop" class="go-top" :style="styles"></icon>
</template>
<script type="text/ecmascript-6">
    import config from '../config';
    import tool from 'common/utils/tool';
    export default {
        name: config.prefix + 'GoTop',
        replace: true,
        props: {
            bottom: {
                type: Number,
                default: 75
            },
            right: {
                type: Number,
                default: 15
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            styles () {
                return {
                    bottom: `${this.bottom}px`,
                    right: `${this.right}px`
                }
            }
        },
        methods: {
            goTop() {
                this.$emit('goTop')
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    .go-top {
        animation: changeColor 2s infinite step-end;
        position: fixed;
        right: 15px;
        bottom: 75px;
        z-index: 9999;
    }
    @keyframes changeColor {
        0% {
            color: red;
        }
        25% {
            color: blue;
        }
        50% {
            color: green;
        }
        75% {
            color: purple;
        }
        100% {
            color: gold;
        }
    }
</style>
