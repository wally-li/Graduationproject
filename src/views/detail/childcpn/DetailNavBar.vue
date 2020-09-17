<template>
  <nav-bar>
    <template #left>
      <img src="~assets/img/common/back.svg" alt="" @click="goBack">
    </template>
    <template #center>
      <div  class="detail-nav-titles">
        <span
        v-for="(item,index) in navTitles" :key="item"
        :class="{active:currentIndex==index}"
        @click="changeTitle(index)">
          {{item}}
        </span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
export default {
  data(){
    return{
      navTitles:["商品","参数","推荐"],
      currentIndex:0
    }
  },
  methods:{
    changeTitle(index){
      this.currentIndex = index;
      this.$emit("changeTo",index);
    },
    goBack(){
      this.$router.back();
    }
  },
  components:{
    NavBar
  }
}
</script>

<style>
  .detail-nav-titles{
    font-size:14px;
    color:black;
    display: flex;
  }
  .detail-nav-titles span{
    flex:1;
  }
  .active{
    color:var(--color-tint);
  }
  .left img{
    margin-top:12px;
  }
</style>
