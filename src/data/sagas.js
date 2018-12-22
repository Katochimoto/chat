// import { call, put, takeLatest, select } from 'redux-saga/effects'
// import {
//   login,
//   logout,
// } from './services'

// import {
//   updateAuth,
// } from './actions'

// import {
//   selectForecast,
//   selectLocation,
// } from './selectors'

// function* fetchForecast () {
//   try {
//     const updated = Date.now()
//     const oldForecast = yield select(selectForecast(location))
//     if (oldForecast && (updated - oldForecast.updated) < 30 * 60 * 1000) {
//       return
//     }

//     yield put(updateStatus('pending'))

//     const forecast = yield call(getForecast, location.latitude, location.longitude)

//     yield put(updateForecast({
//       updated: Date.now(),
//       location: location,
//       data: forecast,
//     }))

//     yield put(updateStatus('success'))
//   } catch (error) {
//     yield put(updateStatus('error'))
//   }
// }

// function* fetchLocation () {
//   try {
//     const oldLocation = yield select(selectLocation)
//     if (oldLocation) {
//       return
//     }

//     yield put(updateStatus('pending'))

//     const latitude = position.coords.latitude
//     const longitude = position.coords.longitude
//     const location = yield call(getLocation, latitude, longitude)
//     yield put(updateLocation(location))

//     yield put(updateStatus('success'))
//   } catch (error) {
//     yield put(updateStatus('error'))
//   }
// }

function* weatherSaga () {
  // yield takeLatest(UPDATE_LOCATION, fetchForecast)
  // yield takeLatest(CHECK_LOCATION, fetchLocation)
  // yield takeLatest(REFRESH_FORECAST, refreshForecast)
}

export default weatherSaga


