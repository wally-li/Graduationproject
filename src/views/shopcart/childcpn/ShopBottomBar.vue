<template>
  <div class="shop-bottom-bar">
    <div class="selectAll " :class="{Checked:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="" @click="selectAll">
      <span>全选</span>
    </div>
    <span class="totalPrice">合计:{{totalPrice | formatPrice}}</span>
    <span class="addition">去结算({{shopCount}})</span>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  computed:{
    isChecked(){
      console.log(this.$store.state.cartLists);
      if(this.$store.state.cartLists.length)
      return this.$store.state.cartLists.every((item)=>item.isChecked == true)
      else
      return false;
    },
    ...mapGetters(["shopCount","totalPrice"])
  },
  methods:{
    selectAll(){
      console.log("被点击"+this.isChecked);
      this.$store.commit("selectAllOrNot",!this.isChecked);
    }
  },
  filters:{
    formatPrice(value){
      return '￥'+value.toFixed(2);
    }
  }
}
</script>

<style>
  .shop-bottom-bar{
    text-align: center;
    line-height: 40px;
    height:40px;
    position:fixed;
    bottom:49px;
    width:100%;
    box-shadow:0px -3px 3px rgba(0,0,0,.2);
    background-color:#eee;
    display: flex;
  }
  .shop-bottom-bar .addition{
    color:#fff;
    background-color:#f00;
    width: 100px;
  }
  .shop-bottom-bar .selectAll{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
  }
  .shop-bottom-bar img{
    border:1px solid #999;
    border-radius:9px;

  }
  .shop-bottom-bar .selectAll.Checked img{
    background-color: var(--color-tint);
    border-color:var(--color-tint);
  }
  .shop-bottom-bar span{
    margin-left:5px;
  }
  .totalPrice{
    text-align: left;
    flex:1;
  }
</style>
