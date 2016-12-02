import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import filter from './modules/filter'
import img from './modules/img'
import info from './modules/info'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    filter,
    img,
    info
  },
  trict: debug
})
