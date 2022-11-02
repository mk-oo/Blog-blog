import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import API from "./CRUD_API/API";

const Create = () => {

    const  [title, setTitle] = useState('');
    const  [description, setDescription] = useState('');
    const  [author, setAuthor] = useState('');
    const [isCreated,setIsCreated ] = useState(false);
    const navigate = useNavigate();

    const  handleSubmit = (e) => {
        
        e.preventDefault();

        const blog = {
            title: title,
            body: description,
            author: author
        }
        
        setIsCreated(true);

        const sendData = API('http://localhost:8000/blogs/', 'POST', blog);

        sendData.then(()=>{

            console.log('Created blog');
            setIsCreated(false);
            navigate('/');

        })

    }


    return ( 
        <div className="create">
            <form >
                <label>Blog Title: </label>
                <input
                 type="text" 
                 value = {title} 
                 onChange = {(e) => setTitle(e.target.value)}
                 required />


                <label>Blog Description: </label>
                <textarea 
                value = {description}
                onChange = {(e) => setDescription(e.target.value)}
                required>
              
                </textarea>

                <label>Blog Author : </label>
                <select 
                 required
                 value = {author} 
                 onChange = {(e) => setAuthor(e.target.value)}
                 >
                    <option value="Mostafa">Mostafa</option>
                    <option value="Osama">Osama</option>
                    <option value="Ali">Ali</option>
                </select>

                { !isCreated && <button onClick={handleSubmit}>Add Blog</button>}
                { isCreated && <button onClick={handleSubmit}>Adding Blog ...</button>}
            </form>

        </div>
     );
}
 
export default Create;