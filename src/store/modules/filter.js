import * as types from '../mutation-types'

const state = {
  province: "不限",
  provinceId: "",
  city: "",
  cityId: "",
  school: "不限",
  schoolId: "",
  year: "不限",
  sex: "",
  profession: "不限",
  professionId: "",
  interest: "不限",
  interestId: "",
  sex: " ",
  status: false
}

const getters = {
  getProvince: state => state.province,
  getCity: state => state.city
}

const mutations = {
  [types.SELECT_FILTER_PROVINCE] (state, {id, name}) {
    state.province = name
    state.provinceId = id
  },
  [types.SELECT_FILTER_SCHOOL] (state,  {id, name}) {
    state.school = name
    state.schoolId = id
  },
  [types.SELECT_FILTER_PROFESSION] (state,  {id, name}) {
    state.profession = name
    state.professionId = id
  },
  [types.SELECT_FILTER_CITY] (state, {id, name} ) {
    state.city = name
    state.cityId = id
  },
  [types.SELECT_FILTER_YEAR] (state, year) {
    state.year = year
  },
  [types.SELECT_FILTER_INTEREST] (state,  {id, name}) {
    state.interest = name
    state.interestId = id
  },
  [types.SELECT_FILTER_SEX] (state, id) {
    state.sex = id
  },
  [types.FILTER_STATUS] (state, status) {
    state.status = status
  }
}

export default {
  state,
  getters,
  mutations
}
