import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const {blogs : blog , isLoading, error} = useFetch('http://localhost:8000/blogs/' + id )

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
        </div>
     );
}
 
export default BlogDetails;