import { useEffect, useState } from "react";
import s from '../Profileinfo.module.css';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    ProfileStatus:{
        color: theme.palette.text.primary,
        cursor: 'pointer',
        height: '26px', 
        fontSize: '14px',
        lineHeight: '200%',
        paddingLeft: '2px',
        fontFamily: 'monospace',
        letterSpacing: '1px',
    },
    ProfileStatusActiv:{ 
    '& > input':{
        border: 'none',
        boxShadow: theme.palette.boxShadow,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        width: '99%',
        borderRadius: '0px',
        outline:'none',
        fontSize: '14px',
        height: '24px',
        lineHeight: '150%',
        fontFamily: 'monospace',
        letterSpacing: '1px',
    }},
    ProfileStatusDisable:{
        color: theme.palette.text.primary,
        height: '26px', 
        fontSize: '14px',
        lineHeight: '200%',
        paddingLeft: '2px',
        fontFamily: 'monospace',
        letterSpacing: '1px',
  }
}),
);

const ProfileStatusWithHooks = (props) => {
const classes = useStyles();  
    //local state
    // useState - возвращиет массив / Деструктуризация
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // Метод, закинте в меня функцию, которую я выполню, когда уже произойдёт отрисовка
    // [] - Говорим, что бы отрисовалось всего 1 раз как componentDidMount
    useEffect(() => {
       setStatus(props.status)
    //  Нсли props.status будет не таким каким он был раньше,пожалуйста запусти наш useEffect
    }, [props.status] );

    const activateEditMode = () =>{
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    // при каждом напечатанном символе мы отправляем значение в state
    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
     }

    return (
        <div>
           { props.isOwner
                ? !editMode &&
                    <div className={classes.ProfileStatus}>
                       <div onClick={activateEditMode}>{props.status || "-----"}</div>
                    </div> ||
                  editMode &&
                    <div className={classes.ProfileStatusActiv}>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode} value={status} />
                    </div>
                : !editMode &&
                <div className={classes.ProfileStatusDisable}>
                   <div>{props.status || "-----"}</div>
                </div> 
           }          
        </div>
    )
}


export default ProfileStatusWithHooks;
