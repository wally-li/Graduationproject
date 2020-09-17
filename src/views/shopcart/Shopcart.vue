<template>
  <div class="shop-cart">
      <nav-bar>
        <template #center>
          <div>
            购物车({{shopCount}})
          </div>
        </template>
      </nav-bar>
      <scroll ref="scroll">
        <shop-list></shop-list>
      </scroll>

      <shop-bottom-bar></shop-bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'
import Scroll from 'components//common/Scroll/Scroll'
import ShopList from './childcpn/ShopList'
import ShopBottomBar from "./childcpn/ShopBottomBar"
import {mapGetters} from "vuex"
export default {
  components:{
    NavBar,
    ShopList,
    ShopBottomBar,
    Scroll
  },
  computed:{
    ...mapGetters(['shopCount'])
  },
  created(){
    this.$bus.$on("shopImgLoad",()=>{
      if(this.$refs.scroll)
      {
        this.$refs.scroll.scroll.refresh();
      }
    }
    );
  }
}
</script>

<style>
  .shop-cart .nav-bar{
    background-color: var(--color-tint);
  }
  .shop-cart .wrapper{
    position:fixed;
    top:44px;
    bottom:89px;
    right:0;
    left:0;
  }
</style>
