import React, {useState} from 'react';
import "./write.css";
import { Link } from "react-router-dom"
import { Timestamp, collection, addDoc, limitToLast } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebase";
import { useUserAuth } from '../context/UserAuthContext';

const Write = () => {
  const { user } = useUserAuth();
  const [ formData, setFormData ] = useState({
    title: "",
    description: "",
    image: "",
    createdAt: Timestamp.now().toDate(),
    author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleImageChange = (e) => {
    setFormData({...formData, image: e.target.files[0]});
  }

  const handlePublish = (e) => {
    if(!formData.title || !formData.description || !formData.image){
      alert('Please fill all the fields');
      return;
    }

    const storageRef = ref(storage, `/images/${Date.now()}${formData.image.name}`);

   const uploadImage = uploadBytesResumable(storageRef, formData.image)

   uploadImage.on("state_changed",
   (snapshot)=>{
     const progressPercent = Math.round(

       (snapshot.bytesTransferred /snapshot.totalBytes) * 100
       );
      setProgress(progressPercent);
   },

   (err) => {
      console.log(err);
   },

   () => {
      setFormData({
        title: "",
        description: "",
        image: "",
      });

      getDownloadURL(uploadImage.snapshot.ref)
      .then((url) => {
        const postRef = collection(db, "Posts");
        addDoc(postRef, {
          title: formData.title,
          description: formData.description,
          imageUrl: url,
          createdAt: Timestamp.now().toDate(),
        })
        .then(() => {
          //toast("Article added successfully", {type: "success"});
          setProgress(0);
        })
        .catch((err) => {
         // toast("Error adding post", { type: "error"} )
        })
      })
   }
   );
  };

  return (
 <div className = "writeBg">
 <div className = "writeGp">
  <Link to = "/">
             <img className = "loginLogo" 
             src = "../LastLogo.png" 
             alt = ""
             />
             </Link>
<h2 className = "header">CREATE POST</h2>
<div className = "inputs">
<label htmlFor = "" className = "lbl">Title:</label>
<input
    className = "inputs"
    type = "text"
    name = "title"
    placeholder = "write your title"
    value = {formData.title}
    onChange = {(e) => handleChange(e)}
    />
<label htmlFor = "" className = "lbl">Attach a Photo:</label>
<div className = "progress">
{/*progress bar*/}
</div>
<input 
    className = "inputs" 
    type = "file" 
    name = "image" 
    accept = "image/*" 
    onChange = {(e) => handleImageChange(e)}
    />
<label htmlFor = "" className = "lbl">Description:</label>
<textarea 
    className = "txtA" 
    type = "text"
    name = "description"
    placeholder = "Write your post..."
    value = {formData.description}
    onChange = {(e) => handleChange(e)}
    >

</textarea>
</div>
<button type = "submit" className = "btn" onClick = {handlePublish} >PUBLISH</button>
  </div>
</div>

  )
}

export default Write;
