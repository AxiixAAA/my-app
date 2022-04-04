// @ts-nocheck
import Preloader from '../../../commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm/ProfileDataForm';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileData from './ProfileDataForm/ProfileData';
import { Box, Grid } from '@mui/material';



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

    return (<>
        <Grid container>
            {/* Lev */}
            <Grid container xs={3.5} >
                {/* Photo */}
                <Grid container > 
                    <Grid 
                        container 
                        direction="column"
                        alignItems="center"
                        
                    >
                        <Grid item >
                            <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
                        </Grid>
                        <Grid item style={{width: '100%'}}>
                            {isOwner 
                                ? <Box  className={s.NewPhotoText} htmlFor={"img"}>обновить фотографию</Box>
                                : null
                            }
                            <div className={s.NewPhoto}>{isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} id={"img"}/>}</div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>
                    Друзья
                </Grid>
            </Grid>
            {/* Prav */}
            <Grid container xs={8.5} style={{border: '1px solid green'}}>
                <Grid item xs>
                    <div className={s.ProfileDataForm}>
                        {editMode 
                            ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}  status={status} updateStatus={updateStatus}/>
                        }
                    </div>
                </Grid>
                {/* <Grid >
                    <div> 
                        <MyPostsContainer isOwner={isOwner}/>
                    </div>
                </Grid> */}
            </Grid>
        </Grid>

         {/* <Box className={s.container} sx={{bgcolor: 'background.default', color: 'text.primary'}} >
            {/* Основное фото */}
            {/* <div className={s.Kartinka}>
                
                 <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
                 {/* Загрузить новое фото */}
                 {/* {isOwner 
                    ? <label  className={s.NewPhotoText} htmlFor={"img"}>обновить фотографию</label>
                    : <label> </label>
                 }
                 <div className={s.NewPhoto}>{isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} id={"img"}/>}</div>
                 
                 
           </div>  */}
            {/* Form */}
            {/* <div className={s.ProfileDataForm}>
                {editMode 
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}  status={status} updateStatus={updateStatus}/>}
            </div>
            <div className={s.ProfileBoxFriends}>

            </div>
            <div> 
                <MyPostsContainer isOwner={isOwner}/>
            </div>
        </Box>  */}
    </>)
  
}

export default Profileinfo
