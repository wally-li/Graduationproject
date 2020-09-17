<template>
  <swiper>
      <swiper-item v-for="(item,index) in banner.list" :key="banner.list[index].src">
        <template>
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperImg">
          </a>
        </template>
      </swiper-item>
    </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper_copy"
import SwiperItem from "components/common/swiper/SwiperItem_copy"
export default {
  components:{
    Swiper,
    SwiperItem
  },
  data(){
    return {
      isImgLoad:false
    }
  },
  methods:{
    swiperImg(){
      if(!this.isImgLoad){
        this.$emit("swiperImg");
        this.isImgLoad = true;
      }

    }
  },
  props:{
    banner:{
      type:Object,
      default(){
        return {}
      }
    }
  },
   mounted(){

  }
}
</script>

<style>

</style>
