import { NavLink, Redirect } from "react-router-dom";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";

import DialogItem from "./DialogItem.jsx/DialogItem";
import Message from "./Message.jsx/Message";
import { Box } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
    dialogs:{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '20px',
        boxShadow: theme.palette.boxShadow,
    },
    allChat:{
        border: '1px solid red',
        width: '100%',
        lineHeight: '200%',
        borderRadius: '20px 20px 0px 0px',
        fontSize: '2em',
        fontWeight:'bold',
        fontFamily: 'monospace',
        textAlign: 'center',
        letterSpacing: '2px',
        
        '& > a': {
            color: theme.palette.text.primary,
        }
        // '& > :hover': {
        //     backgroundColor: '#2B2B2B',
        //     borderRadius: '0',
        // },
    }

}));

let Dialogs = (props) => {
const classes = useStyles();

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} icon={d.icon} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} />)
    
    
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/> ;

    return (
        <Box className={classes.dialogs}>
            <Box className={classes.allChat}>
                <NavLink to="/chat">Общий чат</NavLink>
            </Box>
            <Box className={classes.dialogsItems}>
                {dialogsElements}
            </Box>
            <Box className={classes.massages}>
                <Box>{messagesElements}</Box>       
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </Box>
        </Box>
    );
}

export default Dialogs;


