import { takeEvery, put, call } from 'redux-saga/effects'
import { FETCH_USERS, GET_USERS } from './actionTypes'
import { hideLoader, showLoader } from './actions'

export function* sagaWatcher() {
  yield takeEvery(FETCH_USERS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader())
    const payload = yield call(getUsers)
    yield put({ type: GET_USERS, payload }) 
    yield put(hideLoader())
  } catch(e) {
    console.log(e);
  }
}

async function getUsers() {
  const response = await fetch('http://jsonplaceholder.typicode.com/users')
  return await response.json()
}