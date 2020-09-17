<template>
  <div class="detail-page">
    <detail-nav-bar @changeTo="changeTo" ref="detailNav"></detail-nav-bar>
    <scroll ref="scroll"
    :probeType="3"
    @scroll="scrollToWhere">
      <detail-swiper
      :topImages="topImages"></detail-swiper>
      <goods-info-cpn :goods-info="GoodsInfo"></goods-info-cpn>
      <shop-info :shop="Shop"></shop-info>
      <goods-detail-info
      :detail-info="detailInfo"
      @imgLoad="imgLoad"
      ></goods-detail-info>
      <goods-params :param-info="paramInfo" ref="goodsParams"></goods-params>
      <recommend
      :recommend-list="recommendList"
      ref="recommend"></recommend>
    </scroll>
    <detail-bottom-bar @addToShop="addToShop"></detail-bottom-bar>
    <back-top @click.native="backTop" v-show="toTopIsShow"></back-top>
  </div>
</template>

<script>
import DetailNavBar from "./childcpn/DetailNavBar"
import DetailSwiper from './childcpn/DetailSwiper'
import GoodsInfoCpn from './childcpn/GoodsInfo'
import ShopInfo from './childcpn/ShopInfo'
import GoodsDetailInfo from './childcpn/GoodsDetailInfo'
import GoodsParams from './childcpn/GoodsParams'
import Recommend from './childcpn/Recommend'
import DetailBottomBar from './childcpn/DetailBottomBar'
import BackTop from "components/content/backTop/backTop"


import Scroll from 'components/common/Scroll/Scroll'
import{backTopMixin} from "@/common/mixin"
import {detailGetData,GoodsInfo,Shop,GoodsParam,getRecommend} from  "network/detail"
export default {
  name:"Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    GoodsInfoCpn,
    Scroll,
    ShopInfo,
    GoodsDetailInfo,
    GoodsParams,
    Recommend,
    DetailBottomBar,
    BackTop
  },
  mixins:[backTopMixin],
  created() {
    this.$bus.$on("recomendImgLoad",()=>{
      console.log("refresh");
      if(this.$refs.scroll)
      {
        this.$refs.scroll.scroll.refresh();
      }

    })
    this.iid = this.$route.params.id;
    detailGetData(this.$route.params.id).then(res=>{
      this.topImages = res.result.itemInfo.topImages;
      this.GoodsInfo = new  GoodsInfo(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
      this.Shop = new Shop(res.result.shopInfo);
      this.detailInfo = res.result.detailInfo;
      this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
    })
    getRecommend().then(res=>{
      this.recommendList = res.data.list;
    })
  },
  data() {
    return {
      topImages:[],
      iid:null,
      GoodsInfo:{},
      Shop:{},
      detailInfo:{},
      paramInfo:{},
      recommendList:[],
      scrollToY:[],
      currentIndex:0
    }
  },
  methods:{
    imgLoad(){
      this.$refs.scroll.scroll.refresh();
      this.scrollToY.push(0,-this.$refs.goodsParams.$el.offsetTop,-this.$refs.recommend.$el.offsetTop);
    },
    changeTo(index){
      this.$refs.scroll.scroll.scrollTo(0,this.scrollToY[index],300);
    },
    scrollToWhere(position){
      this.toTopIsShow = position.y < -1000;
      for(let i = 0;i<this.scrollToY.length;i++)
      {

        if(position.y > this.scrollToY[i])
        {
          this.$refs.detailNav.currentIndex = i-1;
          break;
        }
        if(i == this.scrollToY.length-1)
        {
          this.$refs.detailNav.currentIndex = i;
        }
      }
    },
    addToShop(){
      const productInfo = {};
      productInfo.iid = this.iid;
      productInfo.imgURL = this.topImages[0]
      productInfo.title = this.GoodsInfo.title
      productInfo.desc = this.GoodsInfo.desc;
      productInfo.newPrice = this.GoodsInfo.nowPrice;
      this.$store.commit("addToList",productInfo);
      console.log(this.$store.state);
    }
  },

}
</script>

<style>
  .detail-page{
    height: 100vh;
  }
  .wrapper{
    position: absolute;
    top: 44px;
    bottom: 60px;
    width: 100%;
  }
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
  .detail-page+#tab-bar{
    display: none;
  }
  .detail-page .back-top{
    bottom:65px;
  }
</style>
