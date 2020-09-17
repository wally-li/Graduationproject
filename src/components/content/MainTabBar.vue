<template>
   <tab-bar>
      <template #default>
         <!-- 首页 -->
        <tab-bar-item to-path="/home" :activeColor="activeColor">
          <template #item-icon>
            <img src="~assets/img/tabbar/home.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/home_active.svg" alt="">
          </template>
           <template #item-text>
            <div class="item-text">
              首页
            </div>
          </template>
        </tab-bar-item>

        <!-- 购物车 -->
        <tab-bar-item to-path="/shopcart"  :activeColor="activeColor">
          <template #item-icon>
            <img src="~assets/img/tabbar/shopcart.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
          </template>
           <template #item-text>
            <div class="item-text">
              购物车
            </div>
          </template>
        </tab-bar-item>
        <!-- 我的 -->
        <tab-bar-item to-path="/profile"  :activeColor="activeColor">
          <template #item-icon>
            <img src="~assets/img/tabbar/profile.svg" alt="">
          </template>
          <template #item-icon-active>
            <img src="~assets/img/tabbar/profile_active.svg" alt="">
          </template>
           <template #item-text>
            <div class="item-text">
              我的
            </div>
          </template>
        </tab-bar-item>
      </template>
    </tab-bar>
</template>

<script>
import tabBar from "components/common/TabBar/TabBar"
import tabBarItem from "components/common/TabBar/TabBarItem"
export default {

  components:{
    tabBar,
    tabBarItem
  },
  data(){
    return{
      activeColor:"rgb(255, 87, 119)"
    }
  }
}
</script>

<style>

</style>
