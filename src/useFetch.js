import { useEffect,useState } from "react";

const useFetch = (endpoint) => {


    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {

        // load the json from endpoint 
        const parsedJson = 
        fetch(endpoint)
        .then(res=>{
            if (res.ok === true && res.status === 200){

                return res.json();

            }else{
                throw Error('error in requesting data from the server ... ');
            }

            
            });

        //update the blogs state by useState Hook 
        const listOfBlogs = parsedJson.then((data) =>{

            console.log(data);
            setBlogs(data);
            setIsLoading(false);
            setError(null);

        });

        // catch errors of fetching The endpoint
        listOfBlogs.catch(e=>{
            console.log(e.message);
            setIsLoading(false);
            setError(e.message);
        });

    },[endpoint]);

return { blogs, isLoading, error };

};

export default useFetch;