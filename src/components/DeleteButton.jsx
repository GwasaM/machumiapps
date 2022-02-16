import React from 'react';
import { deleteDoc, doc } from "firebase/firestore"; 
import { db, ref, storage } from "firebase";
import "./deleteButton.css";
import { toast } from 'react-toastify';
import { deleteObject } from 'firebase/storage';

function DeleteButton({id, imageUrl}) {
  const handleDelete = async() =>{
    try{
    await deleteDoc(doc(db, "Posts", id))
    toast("Post deleted successfully", {type: "success"})
    const storageRef = ref(storage, imageUrl)
    await deleteObject(storageRef)

    } catch(error) {
      toast("Error deleting post", {type: "error"})
    }
  }

  return (
      <button className = "deleteButton" onClick = {handleDelete}>Delete Post</button>
  )
}

export default DeleteButton;
