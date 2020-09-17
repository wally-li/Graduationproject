<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String
    },
    isShow:{
      type:Boolean
    }
  }

}
</script>

<style>

</style>
