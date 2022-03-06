import { connect } from 'react-redux';
import { FilterType, follow, getUsers, unfollow } from '../../redux/user-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersFilter } from '../../redux/users-selectors';
import { UserType } from '../../Types/types';
import { AppStateType } from '../../redux/redux-store';
// import { usersAPI } from 'api/api';

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users:Array<UserType>
    followingInProgress: Array<number>
    filter:FilterType
}
type MapDispatchPropsType = {
    getUsers: (currentPage:number, pageSize:number, term: string) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
type OwnPropsType = {
    pageTitle:string
}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        const {currentPage,pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize, "")
    };
    onPageChanged = (pageNumber:number) => {
        const {pageSize, filter} = this.props
        // Запрос за пользователями
        this.props.getUsers(pageNumber, pageSize, filter.term)
    };
    // Обработчик события Фильтр   
    onFilterChenged = (filter:FilterType) => {
        const {pageSize} = this.props;
        this.props.getUsers(1, pageSize, filter.term)
    }

    render() {
      return <>
      <h2>{this.props.pageTitle}</h2>
        {this.props.isFetching  ?   <Preloader /> : null}
        <Users  
            totalUsersCount     =   {this.props.totalUsersCount} 
            pageSize            =   {this.props.pageSize}
            currentPage         =   {this.props.currentPage}
            onPageChanged       =   {this.onPageChanged}
            onFilterChenged     =   {this.onFilterChenged}
            users               =   {this.props.users}
            follow              =   {this.props.follow}
            unfollow            =   {this.props.unfollow}
            followingInProgress =   {this.props.followingInProgress}
        />
    </>
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        users:                state.usersPage.users,
        pageSize:             getPageSize(state),
        totalUsersCount:      getTotalUsersCount(state),
        currentPage:          getCurrentPage(state),
        isFetching:           getIsFetching(state),
        followingInProgress:  getFollowingInProgress(state),
        filter:               getUsersFilter(state)
    }
}
// compose(...functions)Объединяет функции справа налево.Это утилита функционального программирования, которая включена в Redux для удобства.Вы можете использовать ее, чтобы применить несколько расширителей стора последовательно.
// connect([mapStateToProps], [mapDispatchToProps])
export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>
    (mapStateToProps, 
    {follow, unfollow, getUsers: getUsers}),
    // Защита~Редирект, от незарегистрированного пользователя
    withAuthRedirect
)(UsersContainer);


