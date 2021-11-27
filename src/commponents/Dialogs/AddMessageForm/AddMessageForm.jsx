import { Textarea } from "commponents/Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "commponents/utils/validators/validators";
import React from "react";
import { Field, reduxForm } from "redux-form";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return(
      <form onSubmit={props.handleSubmit}>
         <div> <Field component={Textarea} name="newMessageBody"
                      placeholder="Enter your message" 
                      validate={[required, maxLength50]}
         /></div>
         <div> <button>send</button> </div>
      </form>
    )
}
  
export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
  