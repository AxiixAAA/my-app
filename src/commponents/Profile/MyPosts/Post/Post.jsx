import React from 'react';

import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>
        <div className={s.avatar}></div>
        
        { props.message }
      
        <div><span>like</span> {props.likesCount}</div>


      </div>

  
}


export default Post;
