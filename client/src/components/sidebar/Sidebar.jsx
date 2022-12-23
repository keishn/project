import axios from "axios";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./sidebar.css"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(()=>{
        const getCats = async ()=>{
            const res = await axios.get("/categories");
            setCats(res.data);
        }
        getCats();
    },[]);
  return (
    <div className="sidebar">
            <span className="sidebarTitle">ABOUT ME</span>
            <img className="sidebarImg" src="https://cdn.wallpapersafari.com/90/46/UYbwlD.jpg" alt=""/>
            <p className="sidebarP">Just do not want to do anything harder then all...</p>
            <div className="sidebarItem">
                <div className="sidebarTitle">CATEGORIES</div>
                <ul className="sidebarList">
                    {cats.map(c=>(
                        <Link to={`/?cat=${c.name}`} className='link'>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocie">
                    <i className="sidebarItemSoc fa-brands fa-facebook"></i>
                    <i className="sidebarItemSoc fa-brands fa-instagram"></i>
                    <i className="sidebarItemSoc fa-brands fa-twitter"></i>
                    <i className="sidebarItemSoc fa-brands fa-pinterest"></i>
                    <i className="sidebarItemSoc fa-brands fa-telegram"></i>
                </div>
            </div>
        </div>
  )
}
