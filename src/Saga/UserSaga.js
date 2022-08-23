import { put, takeLatest, takeEvery, call } from "@redux-saga/core/effects";

function* SignIn(action) {
    console.log(action.value)
    try {
        localStorage.setItem('userInfo', JSON.stringify(action.value))
        yield put({ type: 'SIGN_IN_SUCCESS', payload: action.value })
    } catch (e) {
        yield put({ type: 'SIGN_IN_FAIL', payload: e.message })
    }
}

function* SignOut() {
    localStorage.removeItem('userInfo')
}


function* UserSaga() {
    yield takeLatest('SIGN_IN_REQUEST', SignIn)
    yield takeLatest('SIGN_OUT_REQUEST', SignOut)
}

export { UserSaga }