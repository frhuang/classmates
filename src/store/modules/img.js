import * as types from '../mutation-types'

const state = {
  title: '个人相册',
  src: ''
}

const mutations = {
  [types.ALBUM_IMG_SRC] (state, {title, src}) {
    state.title = title
    state.src = src
  }
}

export default {
  state,
  mutations
}
