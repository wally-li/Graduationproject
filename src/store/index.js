import vuex from "vuex"
import Vue from "vue"

import actions from "./actions"
import getters from './getters'
import mutations from './mutations'


Vue.use(vuex);

const state = {
  cartLists:[]
}
const store = new vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store;
