import Preloader from 'commponents/Common/Preloader/Preloader';
import React from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';



const  Profileinfo = (props) => {
    if (!props.profile) {
      return <Preloader />
    }

    return (
      <div>
        
        <div className={s.Kartinka}> </div>
        <img src={props.profile.photos.large} />
       
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
    );
  
}

export default Profileinfo;
