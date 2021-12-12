import Search from "commponents/Common/Search/Search";
import React from "react";
import { Redirect,Route } from "react-router-dom";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";

import DialogItem from "./DialogItem.jsx/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message.jsx/Message";


let Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} icon={d.icon} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />)
    
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/> ;

    return (
        <div className={s.dialogs}>
        {/* Строка пойска  */}
        <Search />

        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div className={s.massages}>
            <div>{messagesElements}</div>
            <div>
                
            <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
        </div>
    );
}

export default Dialogs;


