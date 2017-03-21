<template>
  <div :class="classes">
      <slot></slot>
  </div>
</template>
<script type="text/ecmascript-6">
    import cx from 'classnames';
    import config from '../config';

    export default {
        name: config.prefix + 'Card',
        props: {
            defaultCls: {
            type: String,
            default: 'card'
          },
          className: {
            type: String,
            default: ''
          }
        },
        computed: {
            classes () {
                return cx({
                  [this.className]: !!this.className,
                  [this.defaultCls]: 1
                })
            }
        }
    }
</script>
