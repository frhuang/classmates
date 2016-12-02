import * as types from '../mutation-types'

const state = {
  name: '',
  pro: '',
  city: '',
  school: '',
  profession: '',
  interest: '',
  year: '',
  qrcode: '',
  stdcard: '',
  jobs: ''
}

const mutations = {
  [types.INFO_PERSONAL_NAME] (state, name) {
    state.name = name
  }
}

export default {
  state,
  mutations
}
