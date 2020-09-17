<template>
  <div class="shop-list-item">
    <div class="item-selector"
   >
      <check-item-button @changeChecked="changeChecked"  :is-checked="shopInfo.isChecked"></check-item-button>
    </div>
    <div class="item-img">
      <img v-lazy="shopInfo.imgURL" alt="" @load="imgLoad">
    </div>
    <div class="item-info">
      <div class="item-title">
        {{shopInfo.title}}
      </div>
      <div class="item-desc">
        {{shopInfo.desc}}
      </div>
      <div class="item-bottom">
        <div class="left item-price">
          {{shopInfo.newPrice | addIcon}}
        </div>
        <div class="right item-count">
          {{shopInfo.count | add}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckItemButton from './CheckItemButton'
export default {
  components:{
    CheckItemButton
  },
  props:{
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    },
    listItemIndex:{
      type:Number
    }
  },
  filters:{
    addIcon(value){
      return "￥"+value
    },
    add(value)
    {
      return "×" + " " +value;
    }
  },
  methods:{
    changeChecked(){
      console.log("2");
      this.$store.commit("changeChecked",this.listItemIndex);
    },
    imgLoad(){
      this.$bus.$emit("shopImgLoad");
    }
  }
}
</script>

<style>
  .shop-list-item{
    width:100%;
    display: flex;
    border-bottom:1px solid #ccc;
    padding:5px;
  }
  .shop-list-item .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
    margin: 5px 10px;
  }
  .shop-list-item .item-title{
    white-space:nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .shop-list-item .item-info{
    overflow: hidden;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    padding: 5px 10px;
  }
  .shop-list-item .item-info .item-title,.shop-list-item .item-info .item-desc{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.left.item-price{
      color: orangered;
}
.shop-list-item .item-selector{
  width: 13%;
  display: flex;
  justify-content:center;
  align-items:center;
}
</style>
