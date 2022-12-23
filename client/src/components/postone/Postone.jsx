import { Link } from "react-router-dom"
import "./postone.css"

export default function Postone({post}) {
  const PF = "localhost:5000/image/"
  return (
    <div>
      <div className="postone">
            {post.photo &&(
              <img className="postImg" src={PF + post.photo} alt=""/>
            )}
            <div className="postInfo">
                <div>
                    {post.categories.map(c=>(
                      <span className="postCat">{c.name}</span>
                    ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                  <span className="postTitle">{post.title}</span>
                </Link>
                <hr className="hr"/>
                <span className="postDate">{new Date(post.createdAt).toDateString}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    </div>
  )
}
