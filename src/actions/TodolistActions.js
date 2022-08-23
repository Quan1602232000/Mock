import {
    GET_TODOLIST_REQUEST,
    GET_TODOLIST_SUCCESS,
    GET_TODOLIST_FAIL,
    GET_TODOLIST_COMPLETED_REQUEST,
    GET_TODOLIST_COMPLETED_SUCCESS,
    GET_TODOLIST_COMPLETED_FAIL,
    PATCH_STATUS_TODOLIST_REQUEST,
    PATCH_STATUS_TODOLIST_SUCCESS,
    PATCH_STATUS_TODOLIST_FAIL,
    GET_TODOLIST_BY_ID_REQUEST,
    GET_TODOLIST_BY_ID_SUCCESS,
    GET_TODOLIST_BY_ID_FAIL,
    PATCH_TODOLIST_REQUEST,
    PATCH_TODOLIST_SUCCESS,
    PATCH_TODOLIST_FAIL,
    DELETE_TODOLIST_REQUEST,
    DELETE_TODOLIST_SUCCESS,
    DELETE_TODOLIST_FAIL,
    POST_TODOLIST_REQUEST,
    POST_TODOLIST_SUCCESS,
    POST_TODOLIST_FAIL,
    GET_TODOLIST_ONHOLD_REQUEST,
    GET_TODOLIST_ONHOLD_SUCCESS,
    GET_TODOLIST_ONHOLD_FAIL

} from '../constants/TodolistContant';

import axios from 'axios';

const url = "http://localhost:4000/api/Todolist"

const getTodolistItem = () => {
    return {
        type: GET_TODOLIST_REQUEST,
    }
}

const getTodolistItemById = (id) => {
    return {
        type: GET_TODOLIST_BY_ID_REQUEST,
        value: id
    }
}

const PatchStatusTodolist = (value) => {
    return {
        type: PATCH_STATUS_TODOLIST_REQUEST,
        value: value
    }
}

const PatchTodolistByid = (value) => {
    return {
        type: PATCH_TODOLIST_REQUEST,
        value: value
    }
}

const DeleteTodolistByid = (id) => {
    return {
        type: DELETE_TODOLIST_REQUEST,
        value: id
    }
}

const PostTodolist = (value) => {
    return {
        type: POST_TODOLIST_REQUEST,
        value: value
    }
}

const GetTodolistOnHold = (page) => async (dispatch) => {
    try {
        dispatch({ type: GET_TODOLIST_ONHOLD_REQUEST, payload: page });
        const { data } = await axios.patch(`${url}?page=${page}&limit=5&status="in progress"&status="pending"`);
        dispatch({ type: GET_TODOLIST_ONHOLD_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: GET_TODOLIST_ONHOLD_SUCCESS, payload: error.message });
    }
}

const GetTodolistCompleted = (page) => async (dispatch) => {
    try {
        dispatch({ type: GET_TODOLIST_COMPLETED_REQUEST, payload: page });
        const { data } = await axios.patch(`${url}?page=${page}&limit=5&status="completed"&status="cancel"`);
        dispatch({ type: GET_TODOLIST_COMPLETED_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: GET_TODOLIST_COMPLETED_SUCCESS, payload: error.message });
    }
}

export {
    getTodolistItem,
    PatchStatusTodolist,
    getTodolistItemById,
    PatchTodolistByid,
    DeleteTodolistByid,
    PostTodolist,
    GetTodolistOnHold,
    GetTodolistCompleted
}
