import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(false);

const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        setError(false);
        const res = await axios.post("/auth/register",{
            username, email, password,
        });
        res.data && window.location.replace("/login");
    }
    catch(err){
        setError(true);
    }
};

    return (
        <div className="regis">
            <span className="regisTitle">Register</span>
            <form className="regisForm" onSubmit={handleSubmit}>
                <label>Name</label>
                <input className="regisInput" type="text" placeholder="Write name..." onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input className="regisInput" type="text" placeholder="Write email..." onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input className="regisInput" type="password" placeholder="Write password..." onChange={e=>setPassword(e.target.value)}/>
                <button className="regisButton" type="submit">Register</button>
                <button className="regisLoginButton"><Link to="/login">Login</Link></button>
                {error && <span style={{color:"red", marginTop: "10px"}}><b>There is already user with this name or email!</b></span>}
            </form>
        </div>
    );
}