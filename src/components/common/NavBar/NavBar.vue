<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-bar{
    height:44px;
    line-height: 44px;
    display: flex;
    text-align: center;
    color:#fff;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }
  .nav-bar .center{
    flex:1
  }
  .nav-bar .left,.nav-bar .right{
    width:60px;
  }
  .nav-bar.home-nav-bar{
    background-color: var(--color-tint);
  }
</style>
