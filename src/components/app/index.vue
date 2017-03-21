<template lang="html">
    <div gs-app>
        <navbar></navbar>
        <transition name="page">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    import Vue from 'vue';
    import channel from './channel';
    import Navbar from './navbar'

    Vue.directive('nav', {
        inserted: function (el, binding) {
            let data = binding.value;
            channel.$emit('PageTransitionEvent', data)
        }
    });

    export default {
        components: {
            Navbar
        },
        data() {
            return {
                gradeClass: 'grade-a'
            }
        },

        created() {
            // grade-a for ios, grade-b for android & other
            if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
                this.gradeClass = 'grade-a'
            } else {
                this.gradeClass = 'grade-b'
            }
            document.querySelector('body').className = this.gradeClass;

            channel.$on('HalaNotification', (data) => {
                $toast.show(data.message);
            })
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">
    @import '../scss/gs';
</style>
