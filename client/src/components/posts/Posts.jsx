import Postone from "../postone/Postone"
import "./posts.css"

export default function Posts({posts}) {
  return (
    <div className="posts">
            {posts.map(p=>(
              <Postone post={p}/>
            ))}  
        </div>
  )
}
