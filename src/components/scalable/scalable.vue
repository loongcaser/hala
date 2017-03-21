<template>
    <div class="ha-scalable-wrapper" :style="{width: w, height: h}">
        <div class="ha-scalable">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" rel="stylesheet/scss">
    .ha-scalable-wrapper {
        position: relative;
        .ha-scalable {
          position: absolute;
        }
    }
</style>
<script type="text/ecmascript-6">
    import config from '../config';
    const re = /^[\d]+(\%)?$/

    const widthAndHeightCoerce = (v) => {
        if (v[v.length - 1] != '%') return v + 'px'
        return v
    }

    const widthAndHeightValidator = (v) => {
        return re.test(v)
    }

    const scaleContent = (e, s) => {
        let scalable = e.querySelector('.ha-scalable');
        scalable.style.width = e.offsetWidth * s + 'px';
        scalable.style.height = e.offsetHeight * s + 'px';
        scalable.style.transform = 'scale(' + 1 / s + ', ' + 1 / s + ')';
        scalable.style.webkitTransform = 'scale(' + 1 / s + ', ' + 1/s + ')';
        scalable.style.left = '-' + e.offsetWidth / s + 'px';
        scalable.style.top = '-' + e.offsetHeight / s + 'px'
    }

    export default {
        name: config.prefix + 'Scalable',
        props: {
            scale: {
              type: Number,
              default: 2
            },

            width: {
              type: String,
              default: '100%',
              validator: widthAndHeightValidator
            },

            height: {
              type: String,
              default: '100%',
              validator: widthAndHeightValidator
            }
        },

        computed: {
            s() {
              return this.scale < 1 ? 1 : this.scale
            },

            w() {
              return widthAndHeightCoerce(this.width)
            },

            h() {
              return widthAndHeightCoerce(this.height)
            }
        },

        mounted() {
            scaleContent(this.$el, this.s);
            window.addEventListener('resize', () => {
                scaleContent(this.$el, this.s)
            })
        }
    }
</script>
