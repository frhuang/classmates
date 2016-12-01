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
//查看大图
export const albumImgSrc = ( { commit }, {title, src}) => {
  commit(types.ALBUM_IMG_SRC, {title, src});
}
//修改名字
export const changeInfoName = ( { commit }, name) => {
  commit(types.INFO_PERSONAL_NAME, name)
}
//修改籍贯
export const changeInfoPlace = ( { commit }, {pro, proId, city, cityId}) => {
  commit(types.INFO_PERSONAL_AREA, {pro, proId, city, cityId})
}
//修改学校
export const changeInfoSchool = ( {commit }, {title, id}) => {
  commit(types.INFO_PERSONAL_SCHOOL, {title, id})
}
//修改专业
export const changeInfoProfession = ({ commit }, {title, id}) => {
  commit(types.INFO_PERSONAL_PROFESSION, {title, id})
}
//修改入学年份
export const changeInfoYear = ({ commit }, year) => {
  commit(types.INFO_PERSONAL_YEAR, year)
}
//修改兴趣爱好
export const changeInfoInterest = ({ commit }, {title, id}) => {
  commit(types.INFO_PERSONAL_PROFESSION, {title, id})
}
