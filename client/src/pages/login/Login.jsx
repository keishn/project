import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import axios from "axios";

export default function Login() {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"});
        try{
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value,
            });
            dispatch({type:"LOGIN_SUCCESS", payload:res.data});
        }
        catch(err){
            dispatch({type:"LOGIN_FAILURE"});
        }
    };


    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={{handleSubmit}}>
                <label>Name</label>
                <input className="loginInput" type="text" placeholder="Enter name..." ref={userRef}/>
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter password..." ref={passwordRef} />
                <button className="loginButton" type="submit" disabled={isFetching}>Login</button>
                <button className="loginRegister"><Link to="/register">Register</Link></button>
            </form>
        </div>
    );
}