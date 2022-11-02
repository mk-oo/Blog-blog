import BlogList from "./BlogList";
import { Link } from "react-router-dom";
import API from "./CRUD_API/API";
const Home = () => {


    // destructing useFetch (custom hook) 
    const {blogs, isLoading,error} = API('http://localhost:8000/blogs','GET');
    const create = "/create";




    return ( 

        <div className="home">


        {error && <div>{error}</div> }

        {isLoading && <div>loading .... </div> }

        { blogs && <BlogList blogs={blogs} title = "All Blogs"/> }


        <div className="create-new-blog">
          <button>
              <Link to={create}>
                  Create New Blog
              </Link>
              </button>
          </div>
       </div>
       
     );
}
 
export default Home;