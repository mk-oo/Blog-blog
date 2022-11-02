import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import API from "./CRUD_API/API";

const BlogDetails = () => {

    const { id } = useParams();
    const {blogs : blog , isLoading, error} = API('http://localhost:8000/blogs/' + id , 'GET')
    const navigate = useNavigate();

    const handleDelete = () => {

        if (window.confirm('Are you sure you want to delete this blog?')) {

            const deletBlog = API('http://localhost:8000/blogs/', 'DELETE', blog.id);
            
            deletBlog.then(res =>{
                if (res.status === 200) {
                    
                    console.log('Blog deleted');

                    navigate('/')
                }                

            })
        }
    }
    return ( 
        <div className="Blog-Detailes">
  
            {error && <div>{error}</div> }

            {isLoading && <div>loading .... </div> }

        {blog && 
                <article>
                        <h2 className="Blog-Title">
                            {blog.title}
                        </h2>
                        <p>Written by {blog.author}</p>
                        <div>
                            {blog.body}
                        </div>

                </article>
            }
            <br />
            <button className="delete-blog" onClick={handleDelete}>Delete Blog</button>
        </div>
     );
}
 
export default BlogDetails;