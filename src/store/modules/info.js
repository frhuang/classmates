import * as types from '../mutation-types'

const state = {
  username: '',
  year: '',
  job_name: '',
  schools: '',
  wechat: '',
  student_id: '',
  student_id_status: '',
  interests: []
}

const mutations = {
  [types.INFO_PERSONAL_INFO] (state, {username, year, job_name, schools, wechat, student_id, student_id_status, interests}) {
    state.username = username
    state.year = year
    state.job_name = job_name
    state.schools = schools
    state.wechat = wechat
    state.student_id = student_id
    state.student_id_status = student_id_status
    state.interests = interests
  }
}

export default {
  state,
  mutations
}
