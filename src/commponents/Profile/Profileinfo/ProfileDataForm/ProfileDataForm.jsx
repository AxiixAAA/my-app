import { createField, Input, Textarea } from "../../../../commponents/Common/FormsControls/FormsControls"
import React from "react"
import { reduxForm } from "redux-form"
import s from './ProfileDataForm.module.css';
import style from '../../../Common/FormsControls/FormsControls.module.css';


const ProfileDataForm = ({handleSubmit, profile, error}) =>{
    return <form onSubmit={handleSubmit}>

     {error && <div className={style.formSummaryError}>{error}</div>}
    <div className={s.Container}>
        <div className={s.Name}>
            <div>Имя:</div>
            <div>Ищу работу:</div>
            <div>Профессиональные навыки:</div> 
            <div>Обо мне:</div> 
            <div></div> 
        </div>

        <div className={s.Data}>
            {createField("Full name", "fullName", [], Input)}
            {createField("", "lookingForAJob", [], Input, {type:"checkbox"})}
            {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            {createField("About me", "aboutMe", [], Textarea)}
        </div>
    </div>
        <div className={s.Footer}> 
            {/* Contacts - обьект, по нему нужно итерироваться, делаем это при помощи Object.keys()  */}
            {/* .map(key => мы хотим на базе каждого ключа, мы хотим отрисовать компонент  Contact*/}
            
            {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <div className={s.contactLeft}>
                    <div>{key}:</div>
                </div>
                <div>
                    <div className={s.contactRigth}>
                         {createField(key, "contacts." + key, [], Input)}
                    </div>
                </div>
            </div>
            })}
        </div> 
    
        <div className={s.button}><button>save</button> </div>
 </form>
} 

// @ts-ignore
export const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
