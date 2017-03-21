<template>
    <div :class="classes">
        <ul>
            <slot></slot>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import cx from 'classnames';
    import config from '../config';

    export default {
        name: config.prefix + 'List',
        props: {
            defaultCls: {
                type: String,
                default: 'list-block'
            },
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
                let typeCls = ''
                    if (this.type === 'media') {
                        typeCls = 'media-list'
                    }else if (this.type !== '' && this.type !== undefined) {
                        typeCls = `${this.type}-block`
                    }
                return cx({
                    [this.className]: !!this.className,
                    [typeCls]: !!typeCls,
                    [this.defaultCls]: 1
                })
            }
        }
    }
</script>
