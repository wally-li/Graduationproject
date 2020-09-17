<template>
  <div id="hy-swiper">
    <div class="swiper"
    ref = "swiper"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name = "indicator" v-if="showIndicator && slideCount>1">
        <div class = "indi-item" v-for="(item,index) in slideCount" :key="index" :class="{active:currentIndex-1==index}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    showIndicator:{//是否显示定时器
      type:Boolean,
      default:true
    },
    animDuration:{
      type:Number,//持续的时间
      default:300
    },
    interval:{
      type:Number,
      default:3000
    },//循环的时间
    moveRatio:{
      type:Number,
      default:0.25
    }
  },
  data(){
    return{
      slideCount:0,//轮播图的个数
      currentIndex:1,//当前轮播图的位置
      totalWidth:0,//每次变换移动的距离也就是轮播图的宽度
      swiperStyle:{},//轮播图的样式
      scrolling:false
    }
  },
  mounted(){
    console.log("swiper被挂载");
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 3000);
  },
  methods:{
    //操作DOM，主要是做初始化，初始化slideCount，swiperStyle，totalWidth。其次给轮播图首尾添加元素
    handleDom(){
      let swiperEl = this.$refs.swiper;
      console.log(swiperEl);
      let slideEls = swiperEl.getElementsByClassName("slide");//let slide = hy_swiperEl.querySelectorAll(".slide");
      console.log(slideEls.length);
      this.slideCount = slideEls.length;//获取轮播图数量赋值给slideCount
      //轮播图数量大于一时左右添加slide
      if(this.slideCount>1)
      {
        //将第一个节点复制然后添加到尾部
        let lastNode = slideEls[0].cloneNode(true);
        swiperEl.appendChild(lastNode);
        //将最后一个节点复制添加到首部
        swiperEl.insertBefore(slideEls[this.slideCount-1].cloneNode(true),slideEls[0]);
        this.totalWidth = swiperEl.offsetWidth;//获取真实的swiper元素的宽度赋值给totalWidth
        console.log(swiperEl.offsetWidth);
        this.swiperStyle = swiperEl.style;//将swiper的CSSStyleDeclaration对象赋值给swiperstyle这样就能通过给swiperStyle添加属性从而给swiperEl添加行内样式了
        this.setTransform(-this.totalWidth);//添加首尾之后显示的是尾部内容。所以要左移一次
      }
    },
    //移动位置的函数
    setTransform(position){
      this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px,0,0)`;
    },
    //滚动轮播图的函数
    scrollContent(position){
      this.scrolling = true;//滚动开启
      //0ms让用户看不到跳转
      this.swiperStyle.transition = "transform "+this.animDuration+"ms";
      this.setTransform(position);
      //检查位置,到最后一个后要回到第一个
      this.checkPosition();
      this.scrolling = false;//滚动完成
    },
    //开启定时器的函数
    startTimer(){
      this.playTimer = window.setInterval(()=>{
        this.currentIndex++;//改变当前的index
        this.scrollContent(-this.currentIndex*this.totalWidth)//移动位置
      }, this.interval);
    },
    stopTimer(){

      window.clearInterval(this.playTimer);
    },
    checkPosition(){

      //这个定时器就是让第四个轮播图跳到第五个轮播图的动画效果先执行完，再跳转。不然动画效果没了。
      setTimeout(() => {
        this.swiperStyle.transition = "transform "+0+"ms";
         if(this.currentIndex >= this.slideCount + 1)
      {
        this.currentIndex = 1;
        this.setTransform(-this.totalWidth);

      }else if(this.currentIndex <= 0){
         this.currentIndex = this.slideCount;
         this.setTransform(-this.totalWidth*this.currentIndex);
      }
      }, this.animDuration);

    },
    //触摸到的时候，记录开始触摸的位置
    touchStart(e){
      //在轮播状态不可以滑动
      if(this.scrolling)
      return;
      //暂停定时器
      this.stopTimer();
      this.startX = e.touches[0].pageX;

    },
    touchMove(e){
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      this.setTransform(-this.currentIndex*this.totalWidth+this.distance)


    },
    touchEnd(e){
      this.currentMove = Math.abs(this.distance);
      if(this.currentMove > this.totalWidth*this.moveRatio && this.distance < 0)
      {
        this.currentIndex++
      }
      else if(this.currentMove > this.totalWidth*this.moveRatio && this.distance > 0)
      {
        this.currentIndex--
      }
      this.scrollContent(-this.currentIndex*this.totalWidth)
 let currentMove = Math.abs(this.distance);



        // 4.移动完成后重新开启定时器
        this.startTimer();

    }





  }

}
</script>

<style>
#hy-swiper{
  position: relative;
  overflow:hidden;
}
.swiper{
  display:flex;
}
.indicator{
  display:flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
}
.indicator .indi-item{
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #fff;
  margin:0 5px;


  font-size:12px;
  text-align: center;
}
.indicator .indi-item.active{
  background-color:rgba(212,62,46,1.0);
}
</style>
