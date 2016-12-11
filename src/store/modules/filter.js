import * as types from '../mutation-types'

const state = {
  province: "",
  provinceId: "",
  city: "",
  cityId: "",
  school: "",
  schoolId: "",
  year: "",
  sex: "",
  profession: "",
  professionId: "",
  interest: "",
  interestId: "",
  sex: " ",
  status: false
}

const getters = {
  getProvince: state => state.province,
  getCity: state => state.city
}

const mutations = {
  [types.SELECT_FILTER_AREA] (state, {proId, proName, cityId, cityName}) {
    state.province = proName
    state.provinceId = proId
    state.city = cityName
    state.cityId = cityId
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
