import Preloader from 'commponents/Common/Preloader/Preloader';
import React from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const  Profileinfo = ({profile,status,updateStatus}) => {
    if (!profile) {
      return <Preloader />
    }

    return (
        <div>
            <div className={s.Kartinka}> </div>
            <img src={profile.photos.large} />
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    );
  
}

export default Profileinfo;
