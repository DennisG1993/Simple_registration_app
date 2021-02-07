import { put, call } from "redux-saga/effects";

import axios from '../../axios';
import {setUsers} from '../actions/user';
import {ADD_USERS_URI, GET_USERS_URI} from "../../api";
import showNotification from "../../Components/Notification";

function fetchUsers() {
    return axios.get(GET_USERS_URI).then(({data}) => data);

}

export function* addUserSaga({user, formRef}) {
    try {
        const res = yield axios.post(ADD_USERS_URI, user);
        formRef.resetFields();
        showNotification('success', res.message, `The user ${user.userName} was created`)
    } catch (message) {
        if (typeof message !== 'string') message = '';
        showNotification('error', 'User creation failed', message)
    }
}

export function* getUsersSaga() {
    try {
        const data = yield call(fetchUsers);
        yield put(setUsers(data));
    } catch (message) {
        if (typeof message !== 'string') message = '';
        showNotification('error', 'Could\'nt fetch users', message)
    }
}