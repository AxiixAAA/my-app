import Preloader from 'commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm';
import { Online } from 'commponents/Common/NavigatorOnline/NavigatorOnline';



const  Profileinfo = ({profile,status,updateStatus,isOwner,savePhoto, saveProfile,isAuth}) => {
    debugger
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
        <div>
            {/* Основное фото */}
            <div className={s.Kartinka}> 
                 <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
            </div>
            {/* Загрузить новое фото */}
            {isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} className={s.NewPhoto} />}
            {/* Статус */}
            <span className={s.profileStatus}><ProfileStatusWithHooks status={status} updateStatus={updateStatus} /></span> 
            {/* Форма */}
            <div className={s.ProfileDataForm}>
                {editMode 
                    // @ts-ignore
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} isAuth={isAuth}/>}
            </div>
    
        </div>
    )
  
}

const ProfileData = ({profile,isOwner, goToEditMode,isAuth}) =>{
    return <>
    <div className={s.Top}>
        <div>{profile.fullName}</div>
        <div>
        <Online />
        </div>

    </div>
    <div className={s.Content}>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me:</b> {profile.aboutMe}
        </div>
    </div>
    <div>
        {/* Contacts - обьект, по нему нужно итерироваться, делаем это при помощи Object.keys()  */}
        {/* .map(key => мы хотим на базе каждого ключа, мы хотим отрисовать компонент  Contact*/}
       <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
           return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>
    {isOwner && <div> <button onClick={goToEditMode}>edit</button> </div>}
 </>
} 


const Contact = ({contactTitle, contactValue}) => {
   return <div className={s.contact}> {contactTitle}: {contactValue} </div>
}

export default Profileinfo
