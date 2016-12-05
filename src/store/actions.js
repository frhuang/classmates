import * as types from './mutation-types'

//选择省份-筛选
export const selectFilterArea = ({ commit }, {proId, proName, cityId, cityName}) => {
  commit(types.SELECT_FILTER_AREA, {proId, proName, cityId, cityName})
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
//更新个人信息
export const updatePersonalInfo = ({ commit }, {
  username, year, job_name, wechat, student_id, interests
}) => {
  commit(INFO_PERSONAL_INFO, {username, year, job_name, wechat, student_id, interests})
}
