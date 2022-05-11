import { useSelector } from 'react-redux';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { Users } from './Users';
import { getIsAuth, getIsFetching } from '../../redux/users-selectors';
import { Redirect } from 'react-router-dom';

export const UsersPage: React.FC = () => {
    const isFetching = useSelector (getIsFetching)
    const isAuth = useSelector(getIsAuth)

    if (!isAuth) {
        return <Redirect to={"/login"} />;
    }
    return <>
        {/* {isFetching  ?   <Preloader /> : null} */}
        <Users />
    </>
}
