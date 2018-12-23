// import { call, put, takeLatest, select } from 'redux-saga/effects'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as services from './services'
import * as actions from './actions'

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

function* userLogin ({ user }) {
  try {
    const data = yield call(services.login, user)
    yield put(actions.setUserLogin(data))
    yield put(actions.setUserAuthStatus('success'))
  } catch (error) {
    yield put(actions.setUserLogout())
    yield put(actions.setUserAuthStatus('error', error))
  }
}

function* userLogout ({ user }) {
  try {
    yield call(services.logout, user)
    yield put(actions.setUserLogout())
  } catch (error) {
    yield put(actions.setUserLogout())
  }
}

function* checkAuth ({ user }) {
  try {
    const data = yield call(services.checkAuth, user)
    yield put(actions.setUserLogin(data))
    yield put(actions.setUserAuthStatus('success'))
  } catch (error) {
    yield put(actions.setUserLogout())
  }
}

function* rootSaga () {
  yield takeLatest(actions.USER_LOGIN, userLogin)
  yield takeLatest(actions.USER_LOGOUT, userLogout)
  yield takeLatest(actions.CHECK_AUTH, checkAuth)
}

export default rootSaga


