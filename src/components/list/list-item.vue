<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    import cx from 'classnames'
    import config from '../config';

    export default {
        name: config.prefix + 'ListItem',
        props: {
            type: {
                type: String,
                require: true
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
                    [`item-${this.type}`]: !!this.type
                })
            }
        }
    }
</script>
