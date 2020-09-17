<template>
  <div class="bottom-bar">
    <div class="bar-left">
      <div>
        <div class="icon service"></div>
        <span class="text">客服</span>
      </div>
      <div>
        <div class="icon shop"></div>
        <span class="text">店铺</span>
      </div>
      <div>
        <div class="icon select"></div>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-right">
      <div class="add-shop" @click="addToShop">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addToShop(){
      this.$emit("addToShop");
    }
  },
}
</script>

<style>
  .bottom-bar{
    line-height: 58px;
    height:58px;
    position:fixed;
    left:0;
    right:0;
    bottom:0;
    background-color:#fff;
    display: flex;
    text-align: center;
    color: #333;
  }
  .bar-left,.bar-right{
    flex:1;
    display: flex;
  }
  .bar-left .text {
    font-size: 13px;
  }
  .bar-left>div{
    line-height: 26px;
    flex:1;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
  }

  .bar-left .service {
    background-position:0 -54px;
  }

  .bar-left .shop {
    background-position:0 -98px;
  }
  .bar-right .add-shop{
    flex:1;
    background-color: #ffe817;
    color: #333;
  }
  .bar-right .buy{
    flex:1;
    color:#fff;
    background-color: #f69;
  }
</style>
