import React, { useState, useEffect } from 'react';
//import DeleteButton from "./DeleteButton"
import { auth, db } from "../firebase";
import { collection, deleteDoc, onSnapshot, orderBy, query, doc } from "firebase/firestore";
//import Post from "./Post"
import { useUserAuth } from "../context/UserAuthContext";

import "./postList.css";

function PostList() {
  const { user } = useUserAuth();
  const [posts, setPosts] = useState([])
  const [error, setError] = useState("");

  useEffect(()=>{
    const postRef = collection(db, "Posts");
    const q = query(postRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const posts = snapshot.docs.map((doc) => ({
       
          id: doc.id,
          ...doc.data(),
      }));
      setPosts(posts);
      console.log(posts);
    });
  },[]); 

  const deletePost = async (id) => {

    const postDoc = doc(db, "Posts", id)
    setError("");
    try{
    await deleteDoc(postDoc);
    } catch (err){
      setError(err.message);
    }
  }

  return (
  <div className = "postList">
      {
        posts.length === 0 ? (
          <p>No Posts Found</p>
        ) : (
          posts.map((post) => (
            <div className = "post" key = {post.id}>
              
             {/*{auth && post.author.id === auth.currentUser.uid && (<button className = "delete" 
              onClick = {() => {
                deletePost(post.id);
                }}*/}
                <button className = "delete" 
              onClick = {() => {
                deletePost(post.id);}}
                >
                <img src = "../delete.svg" alt = "" />
              </button>
          
            <span className = "post-ttl">
                {post?.title}
                
            </span>
                        <img className = "post-img" src = {post?.imageUrl}
            alt = "" 
            />
            <p className = "post-desc">
                {post?.description}   
            </p>
            <h4>{/*user && user?.email*/}</h4>
            {/*<DeleteButton id = {id} imageUrl = {imageUrl}/>*/}
        </div>
            ) )
          
        )
      }
      
  </div>
  )
 
  
}


export default PostList;
