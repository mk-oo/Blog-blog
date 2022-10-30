import { useState,useEffect } from "react";
import BlogList from "./BlogList";


const Home = () => {

    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {

        const parsedJson = 
        fetch('http://localhost:8000/blogs')
        .then(res=>{ return res.json();});

        parsedJson.then((data) =>{

            console.log(data);
            setBlogs(data);
            setIsLoading(false);
        })

    },[])



    return ( 

        <div className="home">

        {isLoading && <div>loading .... </div> }

        { blogs && <BlogList blogs={blogs} title = "All Blogs"/> }

       </div>
     );
}
 
export default Home;