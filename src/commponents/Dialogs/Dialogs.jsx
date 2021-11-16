import React from "react";
import { Redirect,Route } from "react-router-dom";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";
// import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";
// import containerDialogs from "./DialogItem.jsx/containerDialogs/containerDialogs";
import DialogItem from "./DialogItem.jsx/DialogItem";
import s from "./Dialogs.module.css";
import Komponenta1 from "./KomponentyDialogs/Komponenta1";
import Komponenta2 from "./KomponentyDialogs/Komponenta2";
import Message from "./Message.jsx/Message";





let Dialogs = (props) => {


  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
  let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />)
 
  
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  if (!props.isAuth) return <Redirect to={"/login"}/> ;

  return (
    <div className={s.dialogs}>
    <div className={s.PoiskovickDialogs}><textarea  placeholder="Поиск" ></textarea></div>


    <div>
        <Route component={Komponenta1} />
        <Route component={Komponenta2} />
    </div>    


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

// const AddMessageForm = (props) => {
//   return(
//     <form onSubmit={props.handleSubmit}>
//        <div> <Field component="textarea" name="newMessageBody" placeholder="Enter your message" /></div>
//        <div> <button>send</button> </div>
//     </form>
//   )
// }

// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;


