import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from '@/store'
import Vuelazyload from 'vue-lazyload'
Vue.config.productionTip = false
Vue.use(Vuelazyload,{
  preLoad: 1,
  loading: require('assets/img/common/placeholder.png')
})
Vue.prototype.$bus = new Vue();
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
