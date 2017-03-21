<template>
    <div class="item item-borderless">
        <slot></slot>
        <div class="hairline-top"></div>
        <div class="hairline-bottom"></div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    @import "../scss/item";
    .hairline-top:before {
        @include hairline(top);
    }

    .hairline-bottom:after {
        @include hairline(bottom);
    }
</style>
