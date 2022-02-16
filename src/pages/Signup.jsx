import React from 'react';
import "./signup.css";
import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {UserAuthContextProvider, useUserAuth} from "../context/UserAuthContext";

  const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState()
  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try{
      await signUp(email, password);
      navigate("/")
    } catch (err) {
      setError(err.message);
    }

  };

  return(
      <div className = "register">
          <Link to = "/">
             <img className = "signupLogo" 
             src = "../LastLogo.png" 
             alt = ""
             />
             </Link>
          <h2 className = "header">REGISTER</h2>
          <form onSubmit = { handleSubmit } className = "formGrp" type = "submit">
              {/*<label className = "frmLabel">First Name</label>
              <input className = "frmInput" placeholder = "Eg: Peter"/>

              <label className = "frmLabel">Surname</label>
              <input className = "frmInput" placeholder = "Eg: Machumi"/>*/}

              <label className = "frmLabel">Email</label>
              <input onChange = {(e) => setEmail(e.target.value)} type = "email" className = "frmInput" placeholder = "Eg: petermachumi262@gmail.com"/>

              <label className = "frmLabel">Password</label>
              <input onChange = {(e) => setPassword(e.target.value)} type = "password" className = "frmInput" placeholder = ""/>

              {/*<label className = "frmLabel">Re-enter Password</label>
              <input type = "password" className = "frmInput" placeholder = ""/>*/}

            <button className = "frmBtn" type = "submit">REGISTER</button>
            <br />
            <br />
            <h6>Already Signed Up?</h6>
            <button className = "frmBtn" type = "submit"><Link className = "link" to = "/">Login</Link></button>

          </form>
      </div>
  )
}

export default Signup;
