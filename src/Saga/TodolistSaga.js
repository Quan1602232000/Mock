import { call, put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";

const url = 'http://localhost:4000/api/Todolist'

function* GetTodolist() {
    try {
        const { data } = yield call(axios.get, `${url}`)
        yield put({ type: 'GET_TODOLIST_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'GET_TODOLIST_FAIL', payload: e.message })
    }
}

function* GetTodoListById(action) {
    try {
        const { data } = yield call(axios.get, `${url}/${action.value}`)
        yield put({ type: 'GET_TODOLIST_BY_ID_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'GET_TODOLIST_BY_ID_FAIL', payload: e.message })
    }
}

function* PatchStatusTodolist(action) {
    const value = action.value
    try {
        const { data } = yield call(axios.patch, `${url}/${value.TodoId}`, { status: value.status })
        yield put({ type: 'PATCH_STATUS_TODOLIST_SUCCESS', payload: data })
        const dataChange = yield call(axios.get, `${url}`)
        yield put({ type: 'GET_TODOLIST_SUCCESS', payload: dataChange.data })
    } catch (e) {
        yield put({ type: 'PATCH_STATUS_TODOLIST_FAIL', payload: e.message })
    }
}

function* PostTodolist(action) {
    try {
        const { data } = yield call(axios.post, `${url}`, action.value)
        yield put({ type: 'POST_TODOLIST_SUCCESS', payload: data })
        const dataChange = yield call(axios.get, `${url}`)
        yield put({ type: 'GET_TODOLIST_SUCCESS', payload: dataChange.data })
    } catch (e) {
        yield put({ type: 'POST_TODOLIST_FAIL', payload: e.message })
    }
}

function* PatchTodolistByid(action) {
    const value = action.value
    console.log(value)
    try {
        const { data } = yield call(axios.patch, `${url}/${value.TodoId}`, value.data)
        yield put({ type: 'PATCH_TODOLIST_SUCCESS', payload: data })
        const dataByid = yield call(axios.get, `${url}/${value.TodoId}`)
        yield put({ type: 'GET_TODOLIST_BY_ID_SUCCESS', payload: dataByid.data })
    } catch (e) {
        yield put({ type: 'PATCH_TODOLIST_FAIL', payload: e.message })
    }
}

function* DeleteTodolistByid(action) {
    try {
        const { data } = yield call(axios.delete, `${url}/${action.value}`)
        yield put({ type: 'DELETE_TODOLIST_SUCCESS', payload: data })
    } catch (e) {
        yield put({ type: 'DELETE_TODOLIST_FAIL', payload: e.message })
    }
}

function* TodolistSaga() {
    yield takeEvery('GET_TODOLIST_REQUEST', GetTodolist)
    yield takeEvery('GET_TODOLIST_BY_ID_REQUEST', GetTodoListById)
    yield takeEvery('POST_TODOLIST_REQUEST', PostTodolist)
    yield takeEvery('PATCH_STATUS_TODOLIST_REQUEST', PatchStatusTodolist)
    yield takeEvery('PATCH_TODOLIST_REQUEST', PatchTodolistByid)
    yield takeEvery('DELETE_TODOLIST_REQUEST', DeleteTodolistByid)
}



export { TodolistSaga };