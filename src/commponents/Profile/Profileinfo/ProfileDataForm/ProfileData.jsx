import { Online } from "commponents/Common/NavigatorOnline/NavigatorOnline"
import React from "react"
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks"
import s from '../Profileinfo.module.css';


const ProfileData = ({profile,isOwner, goToEditMode,status,updateStatus}) =>{

    return <div className={s.ProfileData}>
    
        <div className={s.ProfileData_Top}>
            <div className={s.ProfileData_NameAndOnline}>
                <div>{profile.fullName}</div>
                <span><Online /></span>
                
            </div>
                <div><ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner}/></div>
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
    
    export default ProfileData