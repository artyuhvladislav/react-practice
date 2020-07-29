import { connect } from 'react-redux';
import UsersAPIComponent from './UserAPIComponent';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        userPages: state.usersPage.userPages,
        currentPage: state.usersPage.currentPage,
        isFetching:  state.usersPage.isFetching
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    toggleIsFetching
})(UsersAPIComponent)


export default UsersContainer