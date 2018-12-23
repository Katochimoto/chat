// export function selectForecast (location) {
//   return (state) => {
//     if (!location) {
//       return
//     }

//     return state.forecast.find(item => (
//       item.location.place_id === location.place_id
//     ))
//   }
// }

export function selectAuth (state) {
  return state.auth
}

export function selectUsers (state) {
  return state.users
}
