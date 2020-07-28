import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        userPages: state.usersPage.userPages,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer