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

const GetTodolistReducer = (state = { TodoList: [] }, action) => {
    // console.log(action.type)
    switch (action.type) {
        case GET_TODOLIST_REQUEST:
            return { loading: true, TodoList: [] };
        case GET_TODOLIST_SUCCESS:
            return { loading: false, TodoList: action.payload };
        case GET_TODOLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

const GetTodolistByIdReducer = (state = { TodoListById: {} }, action) => {
    switch (action.type) {
        case GET_TODOLIST_BY_ID_REQUEST:
            return { loading: true, TodoListById: {} };
        case GET_TODOLIST_BY_ID_SUCCESS:
            return { loading: false, TodoListById: action.payload };
        case GET_TODOLIST_BY_ID_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

// const GetTodolistCompletedReducer = (state = { TodoList_Completed: [] }, action) => {
//     switch (action.type) {
//         case GET_TODOLIST_COMPLETED_REQUEST:
//             return { loading: true, TodoList_Completed: [] };
//         case GET_TODOLIST_COMPLETED_SUCCESS:
//             return { loading: false, TodoList_Completed: action.payload };
//         case GET_TODOLIST_COMPLETED_FAIL:
//             return { loading: false, error: action.payload };
//         default: return state;
//     }
// }

const PatchTodolistByStatusReducer = (state = { Patch_Completed: {} }, action) => {
    switch (action.type) {
        case PATCH_STATUS_TODOLIST_REQUEST:
            return { loading: true, Patch_Completed: {} };
        case PATCH_STATUS_TODOLIST_SUCCESS:
            return { loading: false, Patch_Completed: action.payload };
        case PATCH_STATUS_TODOLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

const PatchTodolistReducer = (state = { Patch_Todolist: {} }, action) => {
    switch (action.type) {
        case PATCH_TODOLIST_REQUEST:
            return { loading: true, Patch_Todolist: {} };
        case PATCH_TODOLIST_SUCCESS:
            return { loading: false, Patch_Todolist: action.payload };
        case PATCH_TODOLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

const DeleteTodolistReducer = (state = { Delete_Todolist: {} }, action) => {
    switch (action.type) {
        case DELETE_TODOLIST_REQUEST:
            return { loading: true, Delete_Todolist: {} };
        case DELETE_TODOLIST_SUCCESS:
            return { loading: false, Delete_Todolist: action.payload };
        case DELETE_TODOLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

const PostTodolistReducer = (state = { Post_todolist: {} }, action) => {
    switch (action.type) {
        case POST_TODOLIST_REQUEST:
            return { loading: true, Post_todolist: {} };
        case POST_TODOLIST_SUCCESS:
            return { loading: false, Post_todolist: action.payload };
        case POST_TODOLIST_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}


const GetTodolistOnHoldReducer = (state = { OnHold: [] }, action) => {
    switch (action.type) {
        case GET_TODOLIST_ONHOLD_REQUEST:
            return { loading: true, TodoListOnHold: [] };
        case GET_TODOLIST_ONHOLD_SUCCESS:
            return { loading: false, TodoListOnHold: action.payload };
        case GET_TODOLIST_ONHOLD_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

const GetTodolistCompletedReducer = (state = { Completed: [] }, action) => {
    switch (action.type) {
        case GET_TODOLIST_COMPLETED_REQUEST:
            return { loading: true, TodoListCompleted: [] };
        case GET_TODOLIST_COMPLETED_SUCCESS:
            return { loading: false, TodoListCompleted: action.payload };
        case GET_TODOLIST_COMPLETED_FAIL:
            return { loading: false, error: action.payload };
        default: return state;
    }
}

export {
    GetTodolistReducer,
    GetTodolistCompletedReducer,
    PatchTodolistByStatusReducer,
    GetTodolistByIdReducer,
    PatchTodolistReducer,
    DeleteTodolistReducer,
    PostTodolistReducer,
    GetTodolistOnHoldReducer
};