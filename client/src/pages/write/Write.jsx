import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write(){
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username, title, desc,
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } 
          catch (err) {}
        }
        try {
          const res = await axios.post("/posts", newPost);
          window.location.replace("/post/" + res.data._id);
        } catch (err) {}
      };

  return (
      <div className="write">
        {file && 
          <img src={URL.createObjectURL(file)} alt="" className="writeImg"/>
        }
          <form className="writeForm" onSubmit={handleSubmit}>
              <div className="writeFormGr">
                  <label htmlFor="fileInput">
                      <i className="writeIcon fa-solid fa-plus"></i>
                  </label>
                  <input type="file" id="fileInput" style={{ display: "none" }} onChange={e=>setFile(e.target.files[0])}/>
                  <input className="writeInput" placeholder="Title" type="text" autoFocus={true} onChange={e=>setTitle(e.target.value)}/>
              </div>
              <div className="writeFormGr">
                  <textarea className="writeText" placeholder="Write your post!" type="text" autoFocus={true} onChange={e=>setDesc(e.target.value)}>
                  </textarea>
              </div>
              <button className="publish">Publish</button>
          </form>
      </div>
  )
}