import {
    useEffect,
    useState
} from "react";

const API = (endpoint, method, data) => {


    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        var parsedJson;
        if (method === 'GET') {
            // load the json from endpoint 
            parsedJson =
                fetch(
                    endpoint, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                    }).then(res => {
                    if (res.ok === true && res.status === 200) {

                        return res.json();

                    } else {
                        throw Error('error in requesting data from the server ... ');
                    }
                });
        }

        if (method === 'POST') {
            parsedJson =
                fetch('http://localhost:8000/blogs/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(res => {
                    if (res.ok !== true && res.status !== 200) {

                        throw Error('error in requesting data from the server ... ');

                    }
                });
        }

        if (method === 'DELETE') {
            parsedJson =
                fetch('http://localhost:8000/blogs/' + data, {
                    method: 'DELETE'
                }).then(res => {
                    if (res.ok !== true && res.status !== 200) {

                        throw Error('error in requesting data from the server ... ');

                    }
                });
        }

        //update the blogs state by useState Hook 
        const listOfBlogs = parsedJson.then((data) => {

            console.log(data);
            setBlogs(data);
            setIsLoading(false);
            setError(null);

        });

        // catch errors of fetching The endpoint
        listOfBlogs.catch(e => {
            console.log(e.message);
            setIsLoading(false);
            setError(e.message);
        });

    }, [endpoint, method, data]);

    return {
        blogs,
        isLoading,
        error
    };


};

export default API;