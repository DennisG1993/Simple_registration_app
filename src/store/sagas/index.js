import { takeEvery } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import {getUsersSaga, addUserSaga} from './userSaga';

export function* watchUser() {
    yield takeEvery(actionTypes.SET_USERS, getUsersSaga);
    yield takeEvery(actionTypes.ADD_USER, addUserSaga);
}