<template>
  <div class="good-item" @click="toDetail">
    <img :src="getImg" alt="" @load="imgLoad">
    <div class="good-detail">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span class="follow">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    goodItem:Object,
    default(){
      return {

      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("imgLoad");
    },
    toDetail(){
      this.$router.push("/detail/"+this.goodItem.iid);
    }
  },
  computed:{
    getImg(){
      return  this.goodItem.image ||  this.goodItem.show.img
    }
  }
}
</script>

<style>
  .good-item{
    width: 48%;
    position: relative;

    /* flex-basis: 48; */
  }
  .good-item img{
    width: 100%;
    padding-bottom: 40px;
    border-radius: 8px;
  }
  .good-item .good-detail{
    font-size:12px;
    text-align: center;
    position: absolute;
    bottom: 5px;
    left:0;
    right: 0;
  }
  .good-item .good-detail p{
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom:3px;
  }
  .good-item .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .good-item .follow{
    position:relative;
  }
  .good-item .follow::before{
    content:"";
    height: 14px;
    width: 14px;
    background-image:url("~assets/img/common/collect.svg");
    background-size:14px 14px;
    position:absolute;
    left:-15px;
  }
</style>
