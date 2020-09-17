<template>
  <!-- 商品信息 -->
  <div class="goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <!-- 商品描述 -->
    <div class="info-title">
      {{goodsInfo.title}}
    </div>
    <!-- 商品价格 -->
    <div class="info-price">
      <span class="new-price">{{goodsInfo.newPrice}}</span>
      <span class="old-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <!-- 其他信息 -->
    <div class="info-other">
      <span v-if="goodsInfo.columns">{{goodsInfo.columns[0]}}</span>
      <span>{{  goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goodsInfo.services.length-1" :key="index">
        <img src="~assets/img/detail/yes.png">
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodsInfo:{
      type:Object,
      default:{}
    }
  }

}
</script>

<style>
  .goods-info{
    margin-top:10px;
    padding:0 8px;
  }

  .goods-info .info-title{
    color:#222;
  }
  .info-price .new-price{
    font-size:24px;
    color:var(--color-tint);
  }
  .info-price .old-price{
    text-decoration:line-through;
    font-size:13px;
    margin-left:5px;
  }
  .info-price .discount{
    background-color:var(--color-tint);
    border-radius:5px;
    color:#fff;
    font-size:12px;
    padding:2px 5px;
    position: relative;
    top:-7px;
    margin-left:5px;
  }
  .goods-info .info-other{
    margin-top:10px;
    display: flex;
    justify-content:space-between;
    border-bottom:1px solid rgba(100,100,100,.1);
    line-height: 30px;
  }
  .info-other span{
    font-size: 14px;
    color:#999;
  }
  .info-service {
    display: flex;
    justify-content:space-between;
    line-height: 20px;
    font-size: 13px;
    margin:20px 5px;
  }
  .info-service img{
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }
</style>
