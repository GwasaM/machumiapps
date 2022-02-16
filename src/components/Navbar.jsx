import React from 'react';
import { Link, Navigate } from "react-router-dom";
import "./navbar.css";
import { useUserAuth } from "../context/UserAuthContext";

const Navbar = () => {
    const { user, logOut } = useUserAuth();
    const handleLogout = async () => {
        try {
            await logOut();
            Navigate("/");
        } catch (err) {
            console.log(err.message)
        }
    }

  return (
      <div className = "nav">
        {user &&  (<>
          <div className = "l-div">
             <Link to = "/home">
             <img className = "logo" 
             src = "../LastLogo.png" 
             alt = ""
             />
             </Link>
          </div>
          <ul className = "nav-ul">
              <li className = "nav-li"><Link className = "link" to = "/home">home</Link></li>
             <li className = "nav-li"><Link className = "link" to = "/write"> write</Link></li>
              <li className = "nav-li">settings</li>
              <li className = "nav-li"><Link className = "link" to = "/aboutus">About Us</Link></li>
          </ul>
          </>)}
          <div className = "r-div">
         {!user && (<span className = "navLog"><Link className = "link" to = "/">LOGIN</Link></span>)}
           {!user && (<span className = "navLog"><Link className = "link" to = "/signup">REGISTER</Link></span>)}
         
         {/*user && (<span>Hello {user.email}</span>)*/}

          <span className = "r-nav">
          {user && (<span onClick = { handleLogout } className = "navLog">LOGOUT</span>)}
              {user && (<p className = "nav-hello">Hellow {user.email}</p>) }
              {user && (<img className = "nav-img" src = "data:image/jpeg;base64,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" 
                alt = ""
          />)}
          </span>
          
          </div>
          
      </div>
  )
}

export default Navbar;
