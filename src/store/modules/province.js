import * as types from '../mutation-types'
import { address } from '../../config'

const state = {
  province: null,
  city: null
}

const getters = {
  getProvince: state => state.province,
  getCity: state => state.city
}

const mutations = {
  [types.SELECT_PROVINCE] (state, { province }) {
    state.province = province
    state.city = address[province]
  },
  [types.SELECT_PROVINCE] (state, { city }) {
    state.city = city
  }
}

export default {
  state,
  getters,
  mutations
}
