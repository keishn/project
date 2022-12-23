import { useEffect } from "react";
import { useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();



  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    }
    fetchPosts();
  }, [search]);
  return (
    <div className="home">
        <Header />
        <div className="homes">
          <Posts posts={posts}/>
          <Sidebar/>
        </div>
    </div>
  )
}