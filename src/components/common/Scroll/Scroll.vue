<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import pull from '@better-scroll/pull-up'
import oDOM from '@better-scroll/observe-dom'
BScroll.use(pull);
BScroll.use(oDOM);
export default {
  mounted(){
  //bug!这里没有被别的地方引用，导致对象回收
  this.scroll = new BScroll(this.$refs.wrapper,{
    observeDOM: this.isObserveDOM,
    click:this.isClick,
    probeType:this.probeType,
    pullUpLoad:this.ispullUpLoad//是否侦测检测到底部
  });
  // this.scroll.on("scroll",function(position){
  //   console.log(this);这个不是组件对象而是this.scroll 我们需要用箭头函数
  // })

    if(this.probeType == 1||this.probeType == 2||this.probeType == 3){
      this.scroll.on("scroll",(position)=>{
      this.$emit("scroll",position);
    })
    if(this.ispullUpLoad)
    {
      this.scroll.on("pullingUp",()=>{
        this.$emit("pullingUp");

      })
    }
    }
},
    data(){
      return {
        scroll:{}
      }
    },
    props:{
      //是否发射滚动事件scroll
      probeType:{
        default:0,
        type:Number
      },
      //div等元素能否触发点击事件
      isClick:{
        default:true,
        type:Boolean
      },
      //是否监测DOM变化
      isObserveDOM:{
        type:Boolean,
        default:true
      },
      ispullUpLoad:{
        type:Boolean,
        default:false
      }
    }
}
</script>

<style >

</style>
