import { useHistory, useParams } from "react-router-dom";
import UseFetch from "./UseFetch";

const BlogPost = () => {

    const { id } = useParams();
    const { data: blog, error, isPending } = UseFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('http://localhost:8000/blogs/' + blog.id,{
            method : 'DELETE'
        }).then( () => {
            history.push('/');
            console.log("deleted successfully");
        })
    }

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
          <button onClick = {handleClick}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}
 
export default BlogPost;