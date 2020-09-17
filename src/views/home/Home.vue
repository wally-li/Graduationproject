<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <template #center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <!-- tab-control -->
      <tab-control
      :titles = "['流行', '新款', '精选']"
      @changeGoods="changeGoods"
      ref="tabControl1"
      v-show="isFixed"
      :class="{fixed:isFixed}">
      </tab-control>
    <scroll class="home-wrapper" ref="scroll"
    @pullingUp="pullingUp"
    @scroll="getPosition"
    :probeType="3"
    :ispullUpLoad="true">
      <!-- 轮播图 -->
      <home-swiper :banner="banner" @swiperImg="swiperImgLoad">
      </home-swiper>
      <!-- 推荐栏 -->
      <home-rec :recommend="recommend.list"></home-rec>
      <!-- feature view -->
      <home-feature></home-feature>
      <!-- tab-control -->
      <tab-control
      :titles = "['流行', '新款', '精选']"
      @changeGoods="changeGoods"
      ref="tabControl2">
      </tab-control>
      <!-- 商品展示 -->
      <good-list :good-list="goodData[showGoods].list"></good-list>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backTop" v-show="toTopIsShow"></back-top>
  </div>
</template>

<script>
import {homeGetMultiData,
homeGetGoodsData} from "network/home"//导入home页网络请求数据

import TabControl from 'components/content/TabControl'
import NavBar from 'components/common/NavBar/NavBar'
import Scroll from 'components/common/Scroll/Scroll'
import GoodList from 'components/content/GoodList/GoodList'
import BackTop from "components/content/backTop/backTop"

import HomeSwiper from "./childCpn/HomeSwiper"//导入轮播图组件
import HomeRec from './childCpn/HomeRecommend'//导入首页推荐组件
import HomeFeature from "./childCpn/HomeFeature"


import {backTopMixin} from"@/common/mixin"
export default {
   components:{
    NavBar,
    HomeSwiper,
    HomeRec,
    HomeFeature,
    TabControl,
    GoodList,
    Scroll,
    BackTop
  },
  mixins:[backTopMixin],
  data(){
    return {
      banner:{},
      recommend:[],
      goodData:{
        pop:{
          page:0,
          list:[]
        },
        new:{
          page:0,
          list:[]
        },
        sell:{
          page:0,
          list:[]
        },

      },
      showGoods:"pop",
      isFixed:false,
      barOffsetTop:0,
      scrollY:0
    }
  },
  activated() {
    this.$refs.scroll.scroll.scrollTo(0,this.scrollY,1000);
    this.$refs.scroll.scroll.refresh();
  },
  deactivated() {
    console.log("home进入不活跃");
    this.scrollY = this.$refs.scroll.scroll.y;
  },
  created(){
     console.log("home被创建");
    this.homeGetMultiData();
    this.homeGetGoodsData('pop');
    this.homeGetGoodsData('new');
    this.homeGetGoodsData('sell');
    this.$bus.$on("imgLoad",()=>{
      // console.log("aaa");
    this.$refs.scroll.scroll.refresh();
    })
  },
  destroyed() {
    console.log("home被销毁");
  },
  methods: {
    swiperImgLoad(){
    this.barOffsetTop = this.$refs.tabControl2.$el.offsetTop;

  },
    //事件监听相关
    pullingUp(){
      this.homeGetGoodsData(this.showGoods);
    },
    getPosition(position){
      this.toTopIsShow = position.y < -1000;
      this.isFixed = position.y < -this.barOffsetTop
    },

    changeGoods(index){
      switch (index) {
        case 0:
          this.showGoods = "pop"
          break;

        case 1:
          this.showGoods = "new"
          break;

        case 2:
          this.showGoods = "sell"
          break;
      }
      this.$refs.tabControl2.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },

    //网络请求相关
    homeGetGoodsData(type){
      homeGetGoodsData(type,++this.goodData[type].page).then(res=>{
      this.goodData[type].list.push(...res.data.list);
      this.$refs.scroll.scroll.finishPullUp();
    })
    },
    homeGetMultiData(){
      homeGetMultiData().then(res=>{
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
      })
    },

  },

}
</script>

<style>
  #home{
    position: relative;
    background-color: #fff;
    height:100vh;
  }
  .home-nav-bar{

    width: 100%;

  }

  .home-wrapper{
    position:absolute;
    top:44px;
    bottom:49px;
    overflow: hidden;
  }
  .fixed{
    position:fixed;
    top:44px;
    z-index: 999;
  }

</style>
