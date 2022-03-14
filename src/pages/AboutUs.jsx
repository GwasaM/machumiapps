import React from 'react';
import {Link} from "react-router-dom";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div className = "aboutus">

        <div className = "abt-head">
          <div className = "l__nav">
        <Link to = "/home">
             <img className = "logo" 
             src = "../LastLogo.png" 
             alt = ""
             />
             </Link>
          </div>
          <div className = "mid__nav">
        <p> KARIBU MACHUMI APP UPATE HUDUMA BORA NA KIWANGO</p>
        </div>
        <div className = "r__nav">

        </div>
        </div>
        <div className = "info">
        <p>
        Machumi Apps ni watengenezaji wa mifumo ya Teknolojia ya Habari na Mawasiliano(TEHAMA) waliobobea katika utengenezaji wa :
Tovuti(Web Apps), 
Applications za Simu(Mobile Apps), 
Desktop Applications,
Ubunifu na Uchoraji wa Logo(Computerized Logo Design and Creation) na mengine mengi yahusuyo TEHAMA kama vile kupiga Window Computer (Windows and Linux-Ubuntu Operating Systems installation),
Kufunga Mitandao ya Computer(Computer Networking),
Antivirus installation, n.k.

        </p>
        </div>

        <div className = "info">
        <p>
        ewe mmiliki wa Duka, Kituo cha Afya, Shule, Taasisi yoyote n.k. Usijiulize mara mbili mbili, wakati wako ni huu kupeleka shughuli zako kidigitali na kujiepusha na gharama zisizo za lazima katika uendeshaji wa shughuli zako. MachumiApps tupo tayari kukusaidia kuweza kuyafikia malengo yako kwa kukuletea huduma za kidigitali zitakazo
        kuongezea ufanisi katika usimamizi wa shughuli zako na kukuongezea uzalishaji.  
        </p>
        </div>

        <div className = "info">
        <p>
        Huduma zetu tunatoa bila gharama yoyote. Gharama zitakuja pale tu mteja wetu utakapojiridhisha kuwa umeanza kuona mafanikio katika utumiaji wa Apps zetu. Pamoja na hayo, suala gharama litahesabika baada ya miezi mitatu ya majaribio ya kazi tutakayokutengenezea. Hivyo, 
        Usiwe na hofu yoyote juu ya hilo. Kwetu mteja ni mfalme na Mafanikio utakayopa kupitia Apps zetu, kwetu ni zaidi ya faida. USILALE. WASILIANA NASI KWA MAELEKEZO YA KINA.
        </p>
        </div>

    </div>
  )
}

export default AboutUs