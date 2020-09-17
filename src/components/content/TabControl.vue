<template>
  <div class="tab_control">
    <div class="tab_con_item" v-for="(item,index) in titles" :key="item" :class="{active:currentIndex==index}" @click="setActive(index)">
      <span>{{item}}</span>

    </div>
  </div>
</template>

<script>
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    setActive(index){
      this.currentIndex = index;
      this.$emit("changeGoods",index);
    }
  }

}
</script>

<style>
.tab_control{
  width: 100%;
  display: flex;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #fff;
}
.tab_con_item{
  flex:1;
}
.active{
  color:var(--color-tint);
}
.tab_con_item.active span{
  padding:5px;
  border-bottom: 2px solid var(--color-tint);
}
</style>
