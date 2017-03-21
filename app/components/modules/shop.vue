<template>
    <div class="page has-navbar has-tabbar"
         v-nav="{
        title: '列表',
        showBackButton: true,
        showMenuButton: true,
        menuButtonText: menuButtonText,
        onMenuButtonClick: toggleSidebar,
        showMenu: false
      }"
         v-tabbar-menu-index="1">
        <gs-menu :show="showMenu" @showMenus="toggleSidebar"></gs-menu>
        <gs-scroll class="page-content padding-top"
                   :on-refresh="onRefresh">
            <div v-for="(item, index) in list" @click="onItemClick(index)"
                 class="" :class="{'item-stable': index % 2 == 0}">
                <div class="list list-ios" thin-border>
                    <div class="item item-ios" thin>
                        <span style="color: #888;">{{item.title}}</span>
                    </div>
                    <div class="item item-avatar item-ios">
                        <img src="../../assets/images/hala.svg" style="border-radius: 0;">
                        <div class="title">
                            {{item.name}}
                        </div>
                        <div class="item-note">
                            {{item.content}}
                        </div>
                    </div>
                </div>
            </div>

            <div v-if="allLoaded" class="text-center">没有更多数据</div>
        </gs-scroll>

    </div>
</template>

<script type="text/ecmascript-6">
    import axios from 'axios'
    export default {
        data() {
            return {
                list: [],
                PAGE_SIZE: 3,
                page: 1,
                infiniteCount: 0,
                allLoaded: false,
                menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
                sidebar: undefined,
                sidebarRight: undefined,
                showMenu: false
            }
        },
        created() {
            this.$nextTick(() => {
                this.getHappyList()
            });
        },
        mounted() {
        },
        methods:{

            toggleSidebar() {
                this.showMenu = !this.showMenu;
            },

            //获取列表
            getHappyList(){

                //第一种方式，通过扩展api调接口
                this.$api.getMyList({param:{page:this.page}}).then(ret=>{
                    if(ret[this.page-1]){
                        if(this.list.length <= ret[this.page-1].data.totalnum){
                            this.list = this.list.concat(ret[this.page-1].data.list);
                            this.allLoaded = false;
                        }
                    }else{
                        this.allLoaded = true;
                    }
                })

                //第二种方式，通过axios调接口
                /*axios.get("static/tasks.json").then((res) => {
                    let data = res.data;
                    alert('data:'+data);
                    if(data[this.page-1]){
                        if(this.list.length <= data[this.page-1].data.totalnum){
                            this.list = this.list.concat(data[this.page-1].data.list);
                            this.allLoaded = false;
                        }
                    }else{
                        this.allLoaded = true;
                    }
                });*/

            },

            onRefresh(done) {
                setTimeout(() => {
                    this.page++;
                    this.getHappyList();
                    done()
                }, 1000)
            },

            onItemClick(index) {
                console.log(index)
            }

        }
    }
</script>
