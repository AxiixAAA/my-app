import { useSelector } from 'react-redux';
import React from 'react';
import Preloader from '../Common/Preloader/Preloader';
import { Users } from './Users';
import { getIsFetching } from '../../redux/users-selectors';

export const UsersPage: React.FC = () => {
    const isFetching = useSelector (getIsFetching)
    return <>
        {isFetching  ?   <Preloader /> : null}
        <Users />
    </>
}
