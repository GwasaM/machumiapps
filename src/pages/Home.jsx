import React from 'react';
import "./home.css"
import Sidebar from "../components/Sidebar";
import PostList from "../components/PostList.jsx";
import LeftSidebar from "../components/LeftSidebar"
import { useUserAuth } from "../context/UserAuthContext";


const Home = () => {
  const { user } = useUserAuth();
  console.log(user);
  return (
  <div className = "home">
     <LeftSidebar />
     <PostList />
     <Sidebar />
     
  </div>
    );
}

export default Home;
