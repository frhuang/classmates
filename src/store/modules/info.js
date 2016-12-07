import * as types from '../mutation-types'

const state = {
  username: '',
  year: '',
  job_name: '',
  wechat: '',
  student_id: '',
  interests: [],
  schools: ''
}

const mutations = {
  [types.INFO_PERSONAL_INFO] (state, {username, year, job_name, schools, wechat, student_id, interests}) {
    console.log(username)
    state.username = username
    state.year = year
    state.job_name = job_name
    state.schools = schools
    state.wechat = wechat
    state.student_id = student_id
    state.interests = interests
  }
}

export default {
  state,
  mutations
}
