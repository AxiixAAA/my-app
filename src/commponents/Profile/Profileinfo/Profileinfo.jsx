import Preloader from 'commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm';



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
        <div>
            <div className={s.Kartinka}> </div>
            <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
            {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            {editMode 
                // @ts-ignore
                ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
  
}

const ProfileData = ({profile,isOwner, goToEditMode}) =>{
    return <div>
    {isOwner && <div> <button onClick={goToEditMode}>edit</button> </div>}
    <div>
        <b>Full name:</b> {profile.fullName}
    </div>

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
    <div>
        {/* Contacts - обьект, по нему нужно итерироваться, делаем это при помощи Object.keys()  */}
        {/* .map(key => мы хотим на базе каждого ключа, мы хотим отрисовать компонент  Contact*/}
       <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
           return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>
 </div>
} 


const Contact = ({contactTitle, contactValue}) => {
   return <div className={s.contact}> {contactTitle}: {contactValue} </div>
}

export default Profileinfo
