import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    
    <div>
      <Profileinfo  savePhoto={props.savePhoto}
                    isOwner={props.isOwner}
                    profile={props.profile} 
                    status={props.status}
                    saveProfile={props.saveProfile}
                    updateStatus={props.updateStatus} 
        />    
      <MyPostsContainer />
    </div>
  );
};

export default Profile
