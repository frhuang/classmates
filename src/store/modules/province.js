import * as types from '../mutation-types'
import { address } from '../../config'

const state = {
  province: "广东",
  city: "广州",
  school: "不限",
  year: "不限",
  profession: "不限",
  interest: "不限"
}

const getters = {
  getProvince: state => state.province,
  getCity: state => state.city
}

const mutations = {
  [types.SELECT_PROVINCE] (state, province) {
    state.province = province
  },
  [types.SELECT_CITY] (state, city ) {
    state.city = city
  },
  [types.SELECT_YEAR] (state, year) {
    state.year = year
  },
  [types.SELECT_INTEREST] (state, interest) {
    state.interest = interest
  },
  [types.SELECT_SCHOOL] (state, school) {
    state.school = school
  },
  [types.SELECT_PROFESSION] (state, profession) {
    state.profession = profession
  }
}

export default {
  state,
  getters,
  mutations
}
