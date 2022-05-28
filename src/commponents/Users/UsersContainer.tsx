import { useSelector } from 'react-redux';
import React from 'react';
import { Users } from './Users';
import { getIsAuth } from '../../redux/users-selectors';
import { Redirect } from 'react-router-dom';

export const UsersPage: React.FC = () => {

    const isAuth = useSelector(getIsAuth)

    if (!isAuth) {
        return <Redirect to={"/login"} />;
    }
    return <>
        <Users />
    </>
}
