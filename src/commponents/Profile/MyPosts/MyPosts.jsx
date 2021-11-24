// @ts-nocheck
import { Textarea } from "commponents/Common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "commponents/utils/validators/validators";
import React from "react";
import { Field, reduxForm } from "redux-form";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

const MyPosts = React.memo(props => {

let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

let onAddPost = (values) => {
    props.addPost(values.newPostText);
}

return (
    <div>
      My posts
      <AddNewPostFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
});

const AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
        <div>
            <div><Field name="newPostText" component={Textarea}
                        validate={[required, maxLength10]}
                        placeholder={"Post Message"} /></div>
            <div><button>Опубликовать</button></div>
        </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "ProfileAddMewPostForm"})(AddNewPostForm);

export default MyPosts;
