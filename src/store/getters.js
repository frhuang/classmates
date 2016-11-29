export const getPlaces = state => {
  return {
    province: state.filter.province,
    city: state.filter.city
  }
}
