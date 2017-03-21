<template>
    <div class="page" v-nav="{hideNavbar: true}">
        <div class="page-content">
            <div class="hala-stars">
                <div class="loader">
                    <div class="pacman">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        created () {
            setTimeout(() => {
                this.$router.push({name: "login"});
            }, 1500)
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import "../common/scss/loading.scss";
</style>
