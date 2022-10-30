const BlogList = ({blogs,title}) => {

    
    return (             
            <div className="blog-list">
            <h2>{title}</h2>
            <br />
            {blogs.map((blog)=>(

            <div className="blog-preview" key={blog.id} >
                
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p>{blog.author}</p>
                {/* <button onClick={()=>{handleDeleteBlog(blog.id)}}> Delete Blog </button> */}
                
            </div>
            
            ))}
        </div>
 );
}
 
export default BlogList;