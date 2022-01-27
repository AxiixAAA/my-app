// @ts-nocheck
import { Textarea } from "../../../commponents/Common/FormsControls/FormsControls";
import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import UserSmallPhotoContainer from "../../Common/UserSmallPhoto/UserSmallPhotoContainer";

const MyPosts = React.memo(props => {
// debugger
let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} likesCount={p.likesCount} fullName={props.fullName}/>);

let onAddPost = (values) => {
    props.addPost(values.newPostText);
}

return (
    <div className={s.container}>
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
          {/* Post */}
        {postsElements}
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <div className={s.AddNewPostForm}>
                <div className={s.miniManePhoto}>
                    <UserSmallPhotoContainer />
                </div>
                <div>
                    {props.isOwner
                        ? <Field name="newPostText" component={Textarea}
                        placeholder={"Что у вас нового ?"} />
                        : <Field name="newPostText" component={Textarea}
                        placeholder={"Напишите что-нибудь..."} />
                    }
                   
                </div>
                <div>
                     <button>Опубликовать</button>
                </div>
            </div>
        </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddMewPostForm"})(AddNewPostForm);

export default MyPosts;
