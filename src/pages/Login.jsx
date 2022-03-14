
import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
//import GoogleButton from 'react-google-button';
import { auth, provider } from "../firebase.js";
import { sendSignInLinkToEmail, signInWithEmailAndPassword } from "firebase/auth";
import {UserAuthContextProvider, useUserAuth} from "../context/UserAuthContext";

  const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
      await logIn(email, password);
      navigate("/home");
    } catch(err) {
      setError(err.message);
    }
    
  }
   

  return (
    <div className = "login-grp" >
  <div className = "login">
      <Link to = "/">
             <img className = "loginLogo" 
             src = "../LastLogo.png" 
             alt = ""
             />
             </Link>
       <h2 className = "header">LOGIN</h2>
          <form onSubmit = {handleSubmit} className = "formGrp" type = "submit">
              
             {/* <label className = "frmLabel">Surname</label>
              <input onChange = {(e) => setName(e.target.value)} className = "frmInput" placeholder = "Eg: Machumi"/>*/}

              <label className = "frmLabel">Email</label>
              <input onChange = {(e) => setEmail(e.target.value)} type = "email" className = "frmInput" placeholder = "Eg: petermachumi262@gmail.com"/>

              <label className = "frmLabel">Password</label>
              <input onChange = {(e) => setPassword(e.target.value)} type = "password" className = "frmInput" placeholder = ""/>

            <button className = "frmBtn" type = "submit">LOGIN</button>
            
            <br />
            <br />
            {/*<div className = "ggl-Btn">
              <GoogleButton />
            </div>*/}
            
            
            <h6>Not Registered?</h6>
            <button className = "frmBtn" type = "submit"><Link className = "link" to = "/signup">Register</Link></button>


          </form>
          
            
            
          
  </div>
  </div>
  )
}

export default Login;
