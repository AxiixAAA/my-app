import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import s from "./Profile.module.css";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {

  return (
    
    <div>
      <Profileinfo profile={props.profile} 
      status={props.status}  updateStatus={props.updateStatus}/>    
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
