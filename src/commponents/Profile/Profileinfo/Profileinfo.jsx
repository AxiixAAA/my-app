import Preloader from 'commponents/Common/Preloader/Preloader';
import React, { useState } from 'react';
import s from './Profileinfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import userPhoto from "../../../assets/images/avatar.png";
import { ProfileDataFormReduxForm } from './ProfileDataForm';
import { Online } from 'commponents/Common/NavigatorOnline/NavigatorOnline';



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
        <div className={s.container}>
            {/* Основное фото */}
            <div className={s.Kartinka}>
                
                 <img src={profile.photos.large || userPhoto} className={s.mainFoto}/>
                 {/* Загрузить новое фото */}
                 <div className={s.NewPhoto}>{isOwner &&  <input type={"file"} onChange={onMainPhotoSelected} id={"img"}/>}</div>
                 <label  className={s.NewPhotoText} htmlFor={"img"}>обновить фотографию</label>
                 
           </div>
            {/* Form */}
            <div className={s.ProfileDataForm}>
                {editMode 
                    // @ts-ignore
                    ? <ProfileDataFormReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> 
                    : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}  status={status} updateStatus={updateStatus}/>}
            </div>
    
        </div>
    )
  
}

const ProfileData = ({profile,isOwner, goToEditMode,status,updateStatus}) =>{

return <div className={s.ProfileData}>

    <div className={s.ProfileData_Top}>
        <div className={s.ProfileData_NameAndOnline}>
            <div>{profile.fullName}</div>
            <span><Online /></span>
            
        </div>
            <div><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/></div>
    </div>

    <div className={s.ProfileData_Content}>
        <div className={s.ProfileData_ContentName}>
            <div><b>Ищу работу:</b></div>
            <div><b>Мои профессиональные навыки:</b></div>
            <div><b>Обо мне:</b></div>
            
        </div>
        <div className={s.ProfileData_ContentData}>
            <div>{profile.lookingForAJob ? "Yes" : "No"}</div>
            <div>{profile.lookingForAJobDescription}</div>
            <div>{profile.aboutMe}</div>
        </div>
    </div>
    <div className={s.ProfileDataFooter}>
        {/* Contacts - обьект, по нему нужно итерироваться, делаем это при помощи Object.keys()  */}
        {/* .map(key => мы хотим на базе каждого ключа, мы хотим отрисовать компонент  Contact*/}
       <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
           return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>
    {isOwner && <div> <button onClick={goToEditMode}>Редактировать</button> </div>}
 </div>
} 

const Contact = ({contactTitle, contactValue}) => {
   return <div className={s.Contact}>
        <div className={s.contactTitle}> {contactTitle}:</div>
        <div className={s.contactValue}> <a href={contactValue}> {contactValue} </a> </div>
    </div>
}

export default Profileinfo
