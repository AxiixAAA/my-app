import UserSmallPhotoContainer from 'commponents/Common/UserSmallPhoto/UserSmallPhotoContainer';
import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    debugger
    return <div className={s.Post}>
        <div className={s.postAvatar}>
            <UserSmallPhotoContainer />
            {props.fullName}
        </div>
        <div className={s.postMessage}>
            { props.message }   
        </div>
      
        <div className={s.postLikes}> 
            <span>like</span> {props.likesCount}
        </div>
      </div>

  
}


export default Post;
