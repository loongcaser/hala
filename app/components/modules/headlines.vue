<template>
  <div class="page has-navbar has-tabbar"
       v-nav="{
        title: '头条',
        showBackButton: true,
        showMenuButton: true,
        menuButtonText: menuButtonText,
        onMenuButtonClick: toggleSidebar,
        showMenu: false
      }"
       v-tabbar-menu-index="2">
      <gs-menu :show="showMenu" @showMenus="toggleSidebar"></gs-menu>
      <div class="page-content padding-top">

          <gs-scroll class="page-content"
                  :on-infinite="onInfinite">
              <div v-for="(item, index) in news"
                   class="item thin-border" :class="{'item-stable': index % 2 == 0}">
                  <div valign="bottom" class="card-header color-white no-border no-padding">
                      <img class='card-cover' :src="item.text_image0" alt="">
                  </div>
                  <div class="card-content">
                      <div class="card-content-inner">
                          <p class="color-gray">发表于 {{item.edit_time}}</p>
                          <p>{{item.digest}}</p>
                      </div>
                  </div>
                  <div class="card-footer">
                      <span href="#" class="link">赞</span>
                  </div>
              </div>
              <div v-if="infiniteCount >= 5" slot="infinite" class="text-center">没有更多数据</div>
          </gs-scroll>

      </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
                sidebar: undefined,
                sidebarRight: undefined,
                showMenu: false,
                news:[
                    {
                        text_image0:'',
                        title:'初始化标题',
                        edit_time:10,
                        digest:'',
                        news_id:''
                    }
                ],
                pages:1,
                infiniteCount: 0
            }
        },
        mounted() {
            this.getData();
        },
        methods:{
            toggleSidebar() {
                this.showMenu = !this.showMenu;
            },
            getData:function(){
                this.$http.post('/dagoogle/news/get-news',{
                    params:{
                        tableNum:1,
                        justList:1
                    }
                }).then((res) =>{
                    this.news = res.data.data;    //将得到的数据数组直接赋值
                },(msg) => {
                    console.log(msg);
                })
            },
            onInfinite(done) {
                setTimeout(() => {
                    if (this.infiniteCount < 5) {
                        this.pages++;
                        this.$http.post("/dagoogle/news/get-news",{
                            params:{
                                page:this.pages,
                                tableNum:1,
                                justList:1
                            }
                        }).then((res)=>{
                            console.log(this.pages);
                            this.news=(this.news).concat(res.data.data);
                        },(msg)=>{
                            console.log(msg);
                        });
                        this.infiniteCount++
                    }
                    done()
                }, 1500)
            }
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
    @import "scss/layout";
</style>
