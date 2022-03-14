
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom"
import Home from "./pages/Home";
import Write from "./pages/Write";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import Navbar2 from "./components/Navbar2"
import Footer from "./components/Footer";
import './App.css';
import React, {useState} from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

//console.log(process.env);

function App() {

  //const navigate = useNavigate()
  const user = null;
  return (
  <React.Fragment>
    
    <UserAuthContextProvider>
    <Router>
     
        <Routes>
          <Route path = "/signup" 
          element = {<Signup />} 
          />

          <Route path = "/aboutus" 
          element = {
          <ProtectedRoute>
            <AboutUs />
          </ProtectedRoute>
            } 
          />

          <Route path = "/write" 
          element = {
          <ProtectedRoute>
            <Navbar/><Navbar2 />
            <Write />
          </ProtectedRoute>} 
          />
    
          <Route path = "/home"
          element = {
          <ProtectedRoute>
            <Navbar/><Navbar2 />
            <Home />
            <Footer />
          </ProtectedRoute>
          }
          />
           <Route path = "/" 
          element = {<Login />} 
          />
        </Routes>

    </Router>
    </UserAuthContextProvider>

  </React.Fragment>
  );
}

export default App;
