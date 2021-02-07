import * as actionTypes from "./actionTypes";

export const setUsers = users => {
    return {
        type: actionTypes.SET_USERS,
        users
    };
};

export const addUser = (user, formRef) => {
    return {
        type: actionTypes.ADD_USER,
        user,
        formRef
    };
}