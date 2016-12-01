import * as types from '../mutation-types'

const state = {
  name: '个人相册',
  pro: '填写可以让同乡找到你',
  city: '',
  school: '填写可以让校友找到你',
  profession: '填写可以让同专业的找到你',
  year: '填写可以让同年级的找到你',
  qrcode: '填写为你收获人脉和心意',
  stdcard: '让人觉得你靠谱',
  jobs: '展示你的才能 (选填)'
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
