
import React from 'react';
import "./post.css"

const Post = (props) => {
   
  
  return (
  <div className = "post" key = {props.id}>
      <span className = "post-ttl">
          {props.title}
      </span>
      <img className = "post-img" src = {props.imageUrl}
      alt = "title yetu" 
      />
      <p className = "post-desc">
          {props.description}   
      </p>
      <h4>{}</h4>
  </div>
  )
}

export default Post;
