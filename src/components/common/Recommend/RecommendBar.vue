<template>
  <div class="home-rec">
    <re-item v-for="item in recommend" :key="item.image">
      <template #item>
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>
          {{item.title}}
        </div>
        </a>
      </template>
    </re-item>
  </div>
</template>

<script>
import ReItem from "components/common/Recommend/RecommendItem"
export default {
  props:{
    recommend:{
      type:Array,
      require:true
    }
  },
  components:{
    ReItem
  }
}
</script>

<style>
  .home-rec{
    display: flex;
  }
 .home-rec a{
   display: block;
   text-align: center;
 }
 .home-rec a img{
   width: 80%;
   margin-bottom:10px;
   margin-top:5px;
 }
  .home-rec{
    border-bottom:10px solid #eee ;
    padding-bottom:30px;
    font-size: 12px;
  }
</style>
