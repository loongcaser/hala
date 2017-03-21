<template>
    <div class="page-login page">
        <gs-header :pageObj="pageObj" :class="{'header-hide':true}" />
        <div>
            <div class="page-content padding-top">
                <gs-input type="text" :model="form.userName" placeholder="用户名" label="用户名" :value="form.userName"></gs-input>
                <gs-input type="password" :model="form.password" placeholder="密码" label="密码" :value="form.password" style="margin-bottom: 5px;"></gs-input>
                <div class="padding">
                    <gs-md-button class="button button-positive button-block" @click.native="send">
                        登录
                    </gs-md-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import {PAGE_TYPE} from 'common/utils/constants';
    import utils from 'common/utils/sysUtils';
    export default {
        data () {
            return {
                pageType: PAGE_TYPE.LOGIN_PAGE,
                headerShow: true,
                form: {
                    userName: '',
                    password: ''
                }
            };
        },
        props: {
            headerHide: {
                default: false
            }
        },
        created() {
            console.log('设备终端：'+ JSON.stringify(utils.getOs()));
        },
        computed: {
            pageObj () {
                return {
                    className: PAGE_TYPE.LOGIN_PAGE.className,
                    text: PAGE_TYPE.LOGIN_PAGE.text
                };
            }
        },
        methods: {
            send () {
                this.$store.dispatch('login', this.form).then(ret => {
                    if (ret) {
                        $toast.show(ret.msg);
                        this.$router.push({path: '/home/index'});
                    }
                });
            }
        },
        mounted () {

        }
    };
</script>

<style lang="scss" rel="stylesheet/scss">
    .page-login{
        padding-top: px2rem(88);
    }
</style>
