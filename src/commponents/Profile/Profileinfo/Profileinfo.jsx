import Preloader from 'commponents/Common/Preloader/Preloader';
import React from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.png";


const  Profileinfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {
    if (!profile) {
      return <Preloader />
    }

    const onMainPhotoSelected =(e) =>{
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div className={s.Kartinka}> </div>
            <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
  
}

export default Profileinfo
