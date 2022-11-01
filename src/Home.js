import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {


    // destructing useFetch (custom hook) 
    const {blogs, isLoading,error} = useFetch('http://localhost:8000/blogs');




    return ( 

        <div className="home">

        {error && <div>{error}</div> }

        {isLoading && <div>loading .... </div> }

        { blogs && <BlogList blogs={blogs} title = "All Blogs"/> }

       </div>
     );
}
 
export default Home;