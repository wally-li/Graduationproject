<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper_copy'
import SwiperItem from 'components/common/swiper/SwiperItem_copy'
export default {
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .detail-swiper{
    height:300px;
  }
</style>
