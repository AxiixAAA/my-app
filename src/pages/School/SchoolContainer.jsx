import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getIsAuth } from '../../redux/users-selectors';
import SchoolTabs from './SchoolTabs';

const SchoolContainer = () => {
    const isAuth = useSelector(getIsAuth)

    if (!isAuth) {
        return <Redirect to={"/login"} />;
    }
	return (
		<>
			<SchoolTabs />
		</>
	);
};


export default withAuthRedirect(SchoolContainer);