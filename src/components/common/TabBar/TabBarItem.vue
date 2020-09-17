<template>
  <div class="tab-bar-item" @click="changePage">
    <slot name="item-icon" v-if="!isActive">
    </slot>
    <slot name="item-icon-active" v-else>
    </slot>
    <div  :style="{color:isActiveColor}">
      <slot name="item-text">
    </slot>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  props:{
    activeColor:{
      type:String,
      default:"red"
    },
    toPath:String
  },
  methods:{
    changePage(){
      if(this.$route.path!=this.toPath)
      {
        this.$router.push(this.toPath)
      }

    }
  },
  computed:{
    isActive(){
      return this.$route.path==this.toPath?true:false;
    },
    isActiveColor(){
      return this.isActive?this.activeColor:"";
    }
  }
}
</script>

<style>
  .tab-bar-item{
    flex:1;
    text-align: center;
  }
  .tab-bar-item img{
    height: 24px;
    width: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom:2px;
  }
  .tab-bar-item .active{
    color:brown;
  }
</style>
