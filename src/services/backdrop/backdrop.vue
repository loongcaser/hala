<template>
  <div ha-backdrop class="backdrop visible" :class="{'active': state == 1}"></div>
</template>
<script type="text/ecmascript-6">
    import {timeout, removeElement} from '../utils'

    // transition duration
    const duration = 200

    export default {
        data() {
            return {
                state: 0
            }
        },

        destroyed() {
            console.log('[Hala] Backdrop _vm destroyed.')
            removeElement('[ha-backdrop]')
        },

        methods: {
            show() {
                this.state = 1
            },

            hide() {
                this.state = 0
                return timeout(duration)
            },

            getState() {
                return this.state
            }
        }
    }
</script>
