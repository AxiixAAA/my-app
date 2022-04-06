import { createField, Input, Textarea } from "../../../../commponents/Common/FormsControls/FormsControls"
import React from "react"
import { reduxForm } from "redux-form"
import s from './ProfileDataForm.module.css';
import style from '../../../Common/FormsControls/FormsControls.module.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    button:{ 
        '& > button':{
            backgroundColor: theme.palette.background.button,
            color: theme.palette.text.primary,
            width: '100%',
            marginTop: '7px',
            paddingBottom: '5px',
            fontFamily: 'monospace',
            fontSize: '15px',
            lineHeight: '150%',
            borderRadius: '4px',
            cursor: 'pointer',
            boxShadow: '0px 0px 2px wheat',
            border: 'none',
        },
        '& > button:hover':{
            color: 'white',
            boxShadow: '0px 0px 2px rgb(252, 242, 223)',
        },
    },    
 
}),
);

const ProfileDataForm = ({handleSubmit, profile, error}) =>{
const classes = useStyles();   

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

        <div className={s.Data} sx={{ }}>
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
    
        <div className={classes.button}><button>save</button> </div>
 </form>
} 

// @ts-ignore
export const ProfileDataFormReduxForm = reduxForm({form: "edit-profile"})(ProfileDataForm);
