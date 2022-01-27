import { Textarea } from "../../Common/FormsControls/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "../Dialogs.module.css";

const AddMessageForm = (props) => {
    return(
        <div className={s.AddMessageForm}>
            <form onSubmit={props.handleSubmit}>
                <div> <Field component={Textarea} name="newMessageBody"
                            placeholder="Enter your message" 
                /></div>
                <div> <button>отправить</button> </div>
            </form>
        </div>
    )
}
  
export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
  