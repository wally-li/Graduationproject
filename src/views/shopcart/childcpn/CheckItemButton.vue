<template>
  <div class="check-icon" :class="{checked:isChecked}" @click="changeChecked">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
    type:Boolean,
    default:true
  }
  },
  methods:{
    changeChecked(){
      this.$emit("changeChecked");
    }
  }
}
</script>

<style>
  .check-icon {
    width: 16px;
    height: 16px;
    border-radius: 8px;
    border: 1px solid #999;
  }
 .check-icon.checked{
   border-color:var(--color-tint);
   background-color: var(--color-tint);
 }
</style>
