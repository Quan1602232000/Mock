import { all } from "@redux-saga/core/effects";
import { TodolistSaga } from "./TodolistSaga";
import { UserSaga } from "./UserSaga";

export default function* rootSaga() {
    yield all([
        TodolistSaga(),
        UserSaga(),
    ])
}