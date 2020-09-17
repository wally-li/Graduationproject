<template>
  <rec-bar :recommend = "recommend"></rec-bar>
</template>

<script>
import RecBar from 'components/common/Recommend/RecommendBar'
export default {
 components:{
    RecBar
  },
  props:{
    recommend:{
      type:Array,
      require:true
    }
  }
}
</script>

<style>

</style>
