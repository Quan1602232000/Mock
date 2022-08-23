import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './Saga';
import { userSignInReducer } from './reducers/UserReducer';

import {
    GetTodolistReducer,
    GetTodolistByIdReducer,
    GetTodolistOnHoldReducer,
    GetTodolistCompletedReducer,
} from './reducers/TodolistReducer';

const sagaMiddleware = createSagaMiddleware()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = {
    userSignIn: {
        userInfo: localStorage.getItem('userInfo')
            ? JSON.parse(localStorage.getItem('userInfo'))
            : null,
    },
};
const reducer = combineReducers({
    GetTodolist: GetTodolistReducer,
    GetTodolistById: GetTodolistByIdReducer,
    userSignIn: userSignInReducer,
    GetTodolistOnHold: GetTodolistOnHoldReducer,
    GetTodolistCompleted: GetTodolistCompletedReducer
})
const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga)
export default store;