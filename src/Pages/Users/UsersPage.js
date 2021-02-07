import React, {useEffect} from 'react';
import {columns} from "./usersConsts";
import {Table} from "antd";
import { connect } from 'react-redux';
import {setUsers} from "../../store/actions/user";

const UsersPage = ({users, setUsers}) => {
    useEffect(() => {
        console.log('fetch')
        setUsers()
    }, [])

    return (
        <div className={'reg-users-wrapper'}>
            <h1>Registrated users</h1>
           <Table columns={columns} dataSource={users} />
        </div>

    )
}
const mapStateToProps = state => {
    const {users = []} = state.user;
    return {users}
}
const mapDispatchToProps = dispatch => {
    return {
        setUsers: () => dispatch(setUsers())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);