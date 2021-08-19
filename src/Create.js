import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title , setTitle] = useState('');
    const [body , setBody] = useState('');
    const [author , setAuthor] = useState('Tyler Joseph');
    const [isPending , setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title,body,author};
        console.log(blog);
        setIsPending(true);

        setTimeout(() => {
            fetch('http://localhost:8000/blogs/',{
                method : 'POST',
                headers: {"Content-Type" : "application/json"},
                body : JSON.stringify(blog)
            }).then(() => {
                console.log("successfully added");
                setIsPending(false);
                history.push('/');
            })

        }, 1000);
        
    }
    



    return ( 
        <div className="create">
            <h1>Add a new blog</h1>
            <form onSubmit = {handleSubmit}>
                <label>Blog Title :</label>
                <input type='text' required value = {title} onChange = {(e) => setTitle(e.target.value)}></input>

                <label>Blog Body :</label>
                <textarea required value ={body} onChange = {(e) => setBody(e.target.value )}></textarea>

                <label>Author :</label>
                <select value = {author} onChange = { (e)=> setAuthor(e.target.value)}>
                    <option value = "Tyler Joseph">Tyler Joseph</option>
                    <option value = "Marshall Mathers">Marshall Mathers</option>
                    <option value = "347 Aidan">347 Aidan</option>
                    <option value = "Nate">Nate</option>
                </select>
                
                { !isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog ...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;