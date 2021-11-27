import React, { useEffect, useState } from "react";


const ProfileStatusWithHooks = (props) => {
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
            { !editMode &&
                <div>
                   <b>Status</b> <span onClick={activateEditMode}>{props.status || "-----"}</span>
                </div>
            }
            { editMode &&
                <div>
                    {/* onChange={onStatusChange} */}
                    <input onChange={onStatusChange} autoFocus={true} onBlur={ deactivateEditMode} value={status} />
                </div>
            }         
        </div>
    )
}


export default ProfileStatusWithHooks;
