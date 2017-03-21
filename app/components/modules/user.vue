<template>
    <div class="page has-navbar"
         v-nav="{
             title: '我的资料',
             showBackButton: true
         }"
        >
        <div class="page-content padding-top">

            <div class="list list-ios" thin-border>
                <div class="item item-ios" thin>
                    <span style="color: #888;">我的头像</span>
                </div>
                <div class="item item-avatar item-ios">
                    <img src="../../assets/images/hala.svg" style="border-radius: 0;">
                    <div class="title">手机号码</div>
                    <div class="item-note">13642728689</div>
                </div>
            </div>

            <div class="item thin-border">收货地址管理</div>

            <div class="item item-icon-right thin-border">
                老家
                <span class="item-note">修改</span>
                <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
            </div>

            <div class="item item-icon-right thin-border">
                公司
                <span class="item-note">修改</span>
                <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
            </div>

            <div class="item item-icon-right" thin-border>
                常住地址
                <span class="item-note">修改</span>
                <i class="icon ion-ios-arrow-right" style="color: #DDD;"></i>
            </div>

            <div class="footer"></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
          return {

          }
        },
        methods: {
            backIndex() {
                //$router.back({ name: "home.user" })
            }
        },
        beforeDestroy() {

        }
    }
</script>
