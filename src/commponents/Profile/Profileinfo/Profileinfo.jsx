// @ts-nocheck
import Preloader from '../../../commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm/ProfileDataForm';
import MyPostsContainer from '../MyPosts/MyPostsContainer';
import ProfileData from './ProfileDataForm/ProfileData';
import { Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
    NewPhotoText:{
        color: theme.palette.text.paper,
        backgroundColor: theme.palette.background.button,
        boxShadow: theme.palette.boxShadow,
        display: 'block',
        textAlign: 'center',
        paddingBottom: '5px',
        fontFamily: 'monospace',
        fontSize: '15px',
        cursor: 'pointer',
        lineHeight: '200%',
        borderRadius: '8px',
    },
    sss:{
        '& > label:hover':{
            color: theme.palette.text.hover
        }
    },
    mainFoto:{
        width: '100%',
        borderRadius: '8px',
        boxShadow: theme.palette.boxShadow,
    }
  }),
);


const  Profileinfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile}) => {
const classes = useStyles();   
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
        <Grid 
            container
            // direction="row"
            // justifyContent="center"
            // alignItems="flex-start"
            spacing={2}
        >
            {/* Lev */}
            <Grid item xs={3.5} >
                {/* Photo */}
                <Grid 
                    container 
                    direction="column"
                    alignItems="center"
                >
                    <Grid item >
                    <div >               
                        <img src={profile.photos.large || userPhoto} className={classes.mainFoto} />
                        {isOwner 
                          ? <Box className={classes.sss}><label htmlFor={"img"} className={classes.NewPhotoText}>обновить фотографию</label></Box>
                          : <label> </label>
                        }
                        <div className={s.NewPhoto}>{isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} id={"img"}/>}</div>
                    </div>
                    </Grid>
                    <Grid item >
                        Друзья
                    </Grid>
                </Grid>
            </Grid>
            {/* Prav */}
            <Grid item xs={8.5} >
                <Grid container>
                    <Grid item xs >
                        <Box className={s.ProfileDataForm} sx={{bgcolor: 'background.paper'}}>
                            {editMode 
                                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}  status={status} updateStatus={updateStatus}/>
                            }
                        </Box>
                    </Grid>
                    <Grid style={{width: '100%'}}>
                        <MyPostsContainer isOwner={isOwner}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>)
  
}

export default Profileinfo


