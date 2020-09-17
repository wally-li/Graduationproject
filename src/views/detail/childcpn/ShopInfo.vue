<template>
  <div class="detail-shop">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span class="shop-name">{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">

            {{shop.sells | sellCountFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="go-stop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    shop:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  filters:{
    sellCountFilter:function(value){
      if(value < 10000)
      {
        return value;
      }
      else {
        return (value/10000).toFixed(1)+"万"
      }
    }
  }
}
</script>

<style>
.go-stop{
  display: inline-block;
  line-height: 30px;
  width: 150px;
  height:30px;
  border-radius: 8px;
  background-color: #f2f5f8;
  color:#000;
  font-size:14px;

}
.shop-bottom{
  margin-top:10px;
  text-align: center;

}
.detail-shop{
  padding: 25px 8px;

}
.detail-shop img{
  width: 45px;
  height: 45px;
}
.shop-top{
  display: flex;
   align-items: center;
   line-height: 45px;
}
.shop-top .shop-name{
  margin-left:10px;
}
.shop-middle{
  display: flex;
  align-items: center;
  color:#333;
}
.shop-middle-item.shop-middle-left {
    flex: 1;
    display: flex;
    justify-content: space-evenly;
    border-right: 1px solid rgba(0,0,0,.1);
}
.shop-middle-item.shop-middle-right {
    flex: 1;
}
.info-goods{
  text-align: center;
}
.info-goods .goods-text,.info-sells .sells-text{
  margin-top:5px
}
.shop-middle-right table {
    width: 120px;
    margin-left: 30px;
    font-size: 13px;
}
 .shop-middle-right .score {
    color: #5ea732;
  }

  .shop-middle-right .score-better {
    color: #f13e3a;
  }

  .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-middle-right table td{
    padding: 5px 0;
}
</style>
