import * as types from './mutation-types'

export const selectProvince = ({ commit }, province) => {
  commit(types.SELECT_PROVINCE, {
    province: province
  })
}

export const selectCity = ({ commit }, city) => {
  commit(types.SELECT_CITY, {
    city: city
  })
}
