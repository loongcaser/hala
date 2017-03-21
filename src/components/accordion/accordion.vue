<template>
    <div class="ha-accordion">
        <slot></slot>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "./accordion.scss";
</style>
<script type="text/ecmascript-6">
  import config from '../config';
  export default {
    name: config.prefix + 'Accordion',
    props: {
      defaultIndex: String,
      // TODO: validator
      multi: {
        type: String,
        default: 'true',
        validator: function (v) {
          return v == 'true' || v == 'false'
        }
      }
    },
    computed: {
      activeIndex: function () {
        return parseInt(this.defaultIndex)
      }
    },
    created() {
      this.$emit('activeIndexChanged', this.activeIndex)
    }
  }
</script>
