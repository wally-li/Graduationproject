<template>
  <div class="recommend-info">
    <div class="recommend-header">
      热门推荐
    </div>
    <goods-list :good-list="recommendList"></goods-list>
  </div>
</template>

<script>
import GoodsList from 'components/content/GoodList/GoodList'
export default {
  components:{
    GoodsList
  },
  props:{
    recommendList:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      imgCounter:0
    }
  },
  computed: {
    imgCount(){
      return this.recommendList.length;
    }
  },
  created() {
    this.$bus.$on("imgLoad",()=>{
      if(++this.imgCounter == this.imgCount)
      {
        this.$bus.$emit("recomendImgLoad");
      }
    })
  },

}
</script>

<style>
  .recommend-info{
    padding:0 5px;
  }
  .recommend-info .recommend-header{
    line-height: 40px;
    color:#333;
  }
</style>
