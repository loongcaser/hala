<template>
  <router-link :to="path" class="tab-item" active-class="active">
      <span class="icon" :class="iconClass"></span>
      <span class="tab-label" v-text="label"></span>
  </router-link>
</template>

<script type="text/ecmascript-6">
  import config from '../config';
  export default {
    name: config.prefix + 'FooterItem',
    props: {
      path: {},
      icon: '',
      label: ''
    },
    computed: {
      iconClass () {
        return `ion-${this.icon}`
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
