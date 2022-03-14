import React from 'react';
import "./navbar2.css";
import { useUserAuth } from "../context/UserAuthContext";


const Navbar2 = () => {
    const {user} = useUserAuth();
  return (
    <div className = "navbar2">
    <p className = "para1"> 
    HELLO <div className = "name"> {user.email} </div> KARIBU MACHUMI APPS. TUNATOA HUDUMA YA UTENGENEZAJI WA TOVUTI (WEB APPLICATIONS), NA SIMU(MOBILE APPS). PIA TUNATENGENEZA DESKTOP APPS. KWA MAELEZO ZAIDI WASILIANA NASI. Simu No: 0742814261 au 0620283392 E-mail(Recommended): "petermachumi262@gmail.com". ⭐⭐⭐⭐⭐Usiwaze kuhusu gharama tupigie kwanza, au andika email utume namba yako tutakupigia.
    </p>
    </div>
  )
}

export default Navbar2