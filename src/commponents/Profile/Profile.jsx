import React from "react";
import Profileinfo from "./Profileinfo/Profileinfo";
import ProfileStatusWithHooks from "./Profileinfo/ProfileStatusWithHooks";

const Profile = (props) => {
  return (
    
    <div>
        <Profileinfo    savePhoto={props.savePhoto}
                        isOwner={props.isOwner}
                        profile={props.profile} 
                        saveProfile={props.saveProfile}
                        status={props.status}
                        updateStatus={props.updateStatus} 
        />     
    </div>
  );
};

export default Profile
