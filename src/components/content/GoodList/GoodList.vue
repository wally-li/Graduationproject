<template>
  <div class="good-list">
    <good-list-item v-for="item in goodList" :key="item.link" :good-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'
export default {
  props:{
    goodList:{
      type:Array,
      default(){
        return [];
      }
    }
  },
  components:{
      GoodListItem
    }

}
</script>

<style>
  .good-list{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
    width: 100%;
  }
</style>
