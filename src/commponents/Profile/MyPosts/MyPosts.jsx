// @ts-nocheck
import { Textarea } from "../../../commponents/Common/FormsControls/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";

import Post from "./Post/Post";
import UserSmallPhotoContainer from "../../Common/UserSmallPhoto/UserSmallPhotoContainer";
import { Box, Grid } from "@mui/material";


import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  
sss: {
    '& > button':{
        color: theme.palette.text.paper,
        backgroundColor: theme.palette.background.button,
        borderRadius: '4px',
    },
    '& > * textarea':{
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary
    }
},

AddNewPostForm:{
    boxShadow:theme.palette.boxShadow,
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    marginTop: '18px',
    borderRadius: '15px',
    padding: '10px 0px 10px 0px',
    fontSize: '15px',

    '& > * img': {
        width: '35px',
        borderRadius: '100%',
        margin: '0',
    },
    '& > * textarea':{
        width: '100%',
        fontSize: '15px',
        resize:'none', /*указывает, может ли размер элемента изменяться пользователем.*/
        outline: 'none;', /*Уберает подсветку у textaria*/
        border: 'none',
    },
    '& > * button':{
        fontFamily: 'monospace',
        fontSize: '1em',
        cursor: 'pointer',
        boxShadow: '0px 0px 2px wheat',
        border: 'none',
        lineHeight: '150%',
    },
    '& > * button:hover':{
        color: 'white',
    },
}
}),
);

const MyPosts = React.memo(props => {
let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} fullName={props.fullName}/>);

let onAddPost = (values) => {
    props.addPost(values.newPostText);
}

return (
    <Box>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <Box>
        {postsElements}
      </Box>
    </Box>
  );
});

const AddNewPostForm = (props) => {
const classes = useStyles();

    return(
        <Grid container xs={12} className={classes.AddNewPostForm}>
            {/* Top */}
            <Grid xs={12}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"  
            >
                <Grid item xs={1.1} style={{textAlign: 'center'}}> <UserSmallPhotoContainer /></Grid>
                <Grid item xs={10.5} className={classes.sss}>
                    {props.isOwner
                    ? <Field name="newPostText" component={Textarea}
                        placeholder={"Что у вас нового ?"} />
                    : <Field name="newPostText" component={Textarea}
                        placeholder={"Напишите что-нибудь..."} />
                    }
                </Grid>
            </Grid>
            {/* Bottom */}
            <Grid xs={11.7} 
                container
                justifyContent="flex-end"
                
            >
                <form onSubmit={props.handleSubmit} className={classes.sss}> 
                    <button >Опубликовать</button>
                </form>
            </Grid>
            
        </Grid>

    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddMewPostForm"})(AddNewPostForm);

export default MyPosts;

