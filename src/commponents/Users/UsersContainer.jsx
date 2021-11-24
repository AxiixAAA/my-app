import { connect } from 'react-redux';
import { follow, getUsers, setCurrentPage, toggleFollowingProgress, unfollow } from 'redux/user-reducer';
import React from 'react';
import Users from './Users';
import Preloader from 'commponents/Common/Preloader/Preloader';
import { withAuthRedirect } from 'hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount } from 'redux/users-selectors';
// import { usersAPI } from 'api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize)
    };
    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsers(pageNumber, pageSize)
    };
  
    render() {
      return <>
        {this.props.isFetching  ?   <Preloader /> : null}
        <Users  
            totalUsersCount     =   {this.props.totalUsersCount} 
            pageSize            =   {this.props.pageSize}
            currentPage         =   {this.props.currentPage}
            onPageChanged       =   {this.onPageChanged}
            users               =   {this.props.users}
            follow              =   {this.props.follow}
            unfollow            =   {this.props.unfollow}
            followingInProgress ={this.props.followingInProgress}
        />
    </>
    }
}

let mapStateToProps = (state) => {
    return {
        users:                state.usersPage.users,
        pageSize:             getPageSize(state),
        totalUsersCount:      getTotalUsersCount(state),
        currentPage:          getCurrentPage(state),
        isFetching:           getIsFetching(state),
        followingInProgress:  getFollowingInProgress(state)
    }
}
// compose(...functions)Объединяет функции справа налево.Это утилита функционального программирования, которая включена в Redux для удобства.Вы можете использовать ее, чтобы применить несколько расширителей стора последовательно.
// connect([mapStateToProps], [mapDispatchToProps])
export default compose(connect (mapStateToProps, {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers,}),
    // Защита~Редирект, от незарегистрированного пользователя
    withAuthRedirect
)(UsersContainer);


