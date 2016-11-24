import * as types from './mutation-types'

export const selectProvince = ({ commit }, province) => {
  commit(types.SELECT_PROVINCE, province)
}

export const selectCity = ({ commit }, city) => {
  commit(types.SELECT_CITY, city)
}

export const selectYear = ({ commit }, year) => {
  commit(types.SELECT_YEAR, year)
}

export const selectInterest = ({ commit }, interest) => {
  commit(types.SELECT_INTEREST, interest)
}

export const selectSchool = ({ commit}, school) => {
  commit(types.SELECT_SCHOOL, school)
}
export const selectProfession = ({ commit}, profession) => {
  commit(types.SELECT_PROFESSION, profession)
}
