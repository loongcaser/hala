<template>
  <div class="mint-swipe-item">
    <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import config from '../config';
  export default {
    name: config.prefix + 'SwipeItem',

    mounted() {
      this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed() {
      this.$parent && this.$parent.swipeItemDestroyed(this);
    }
  };
</script>
