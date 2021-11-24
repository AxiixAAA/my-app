import React from "react";
import Paginator from "commponents/Common/Paginator/Paginator";
import User from "./User";


let Users = ({totalUsersCount,pageSize, currentPage,onPageChanged,users,...props}) => {

    return <>
        {/* Список пользователей */}
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>
        {/* Пользователь */}
        {users.map(u => 
        <User 
            user={u} 
            followingInProgress={props.followingInProgress}
            key={u.id}
            unfollow={props.unfollow}
            follow={props.follow}
        />)}
    </>
}
export default Users