import React from 'react';
import * as axios from 'axios';
import User from './Users';
import Preloader from '../Common/Preloader/Preloader';
class UsersAPIComponent extends React.Component {
  
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.userPages}`).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
        
        
    }
    onPageChanged = (pageNumber) => {
        this.props.setUsers([]);
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.userPages}`).then( response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        });
       
    }
    render() {
        
        
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <User 
                  totalCount = {this.props.totalCount}
                  userPages = {this.props.userPages}
                  onPageChanged = {this.onPageChanged}
                  currentPage = {this.props.currentPage}
                  users = {this.props.users}
                  unfollow = {this.props.unfollow}
                  follow = {this.props.follow}
                  />
            </>
        )
    }
}

export default UsersAPIComponent