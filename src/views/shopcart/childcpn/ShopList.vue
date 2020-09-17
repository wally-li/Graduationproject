<template>
  <div class="shop-cart-list">
    <shop-list-item v-for="(item,index) in $store.state.cartLists" :shop-info="item" :key="item.iid" :list-item-index="index"></shop-list-item>
  </div>
</template>

<script>
import ShopListItem from './ShopListItem'
export default {
  components:{
    ShopListItem
  }
}
</script>

<style>

</style>
