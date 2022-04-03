// @ts-nocheck
import Preloader from '../../../commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm/ProfileDataForm';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileData from './ProfileDataForm/ProfileData';
import { Box } from '@mui/material';



const  Profileinfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile}) => {
    
    let [editMode, setEditMode] = useState(false);
    
    if (!profile) {
      return <Preloader />
    }

    const onMainPhotoSelected =(e) =>{
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )
    }

    return (
        <Box className={s.container} sx={{bgcolor: 'background.default', color: 'text.primary'}} >
            {/* Основное фото */}
            <div className={s.Kartinka}>
                
                 <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
                 {/* Загрузить новое фото */}
                 {isOwner 
                    ? <label  className={s.NewPhotoText} htmlFor={"img"}>обновить фотографию</label>
                    : <label> </label>
                 }
                 <div className={s.NewPhoto}>{isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} id={"img"}/>}</div>
                 
                 
           </div>
            {/* Form */}
            <div className={s.ProfileDataForm}>
                {editMode 
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}  status={status} updateStatus={updateStatus}/>}
            </div>
            <div className={s.ProfileBoxFriends}>

            </div>
            <div> 
                <MyPostsContainer isOwner={isOwner}/>
            </div>
        </Box>
    )
  
}

export default Profileinfo
