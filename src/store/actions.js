import * as types from './mutation-types'

//选择省份-筛选
export const selectFilterProvince = ({ commit }, {id, name}) => {
  commit(types.SELECT_FILTER_PROVINCE, {id, name})
}
//选择城市-筛选
export const selectFilterCity = ({ commit }, {id, name}) => {
  commit(types.SELECT_FILTER_CITY, {id, name})
}
//选择学校-筛选
export const selectFilterSchool = ({ commit }, {id, name}) => {
  commit(types.SELECT_FILTER_SCHOOL, {id, name})
}
//选择专业-筛选
export const selectFilterProfession = ({ commit }, {id, name}) => {
  commit(types.SELECT_FILTER_PROFESSION, {id, name})
}
//选择入学年份-筛选
export const selectFilterYear = ({ commit }, year) => {
  commit(types.SELECT_FILTER_YEAR, year)
}
//选择兴趣爱好-筛选
export const selectFilterInterest = ({ commit }, {id, name}) => {
  commit(types.SELECT_FILTER_INTEREST, {id, name})
}
//选择性别-筛选
export const selectFilterSex = ({ commit }, id) => {
  commit(types.SELECT_FILTER_SEX, id)
}
