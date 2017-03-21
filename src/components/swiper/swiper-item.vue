<template>
    <div class="swiper-item">
        <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">
    import config from '../config';
    export default {
        name: config.prefix + 'SwiperItem',
    }
</script>
