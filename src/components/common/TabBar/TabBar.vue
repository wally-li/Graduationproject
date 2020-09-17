<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {


}
</script>

<style>
   #tab-bar{
     display: flex;
     width: 100%;
     height:49px;
     background-color:#f6f6f6;
     position:fixed;
     right:0;
     bottom:0;
     box-shadow: 0 1px 1px rgba(100,100.100,.2);
   }
</style>
