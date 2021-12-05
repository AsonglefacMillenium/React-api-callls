import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';

const Main = () => {

    const [data, setdata] = useState({ hits: [] });
    const [query, setQuery] = useState('redux');
    const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const result = await axios(url);

            setdata(result.data);
            setIsLoading(false);

        }
        fetchData();


    }, [url])


    return (
        <Fragment>
            <input type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
            />

            <button type="button" 
            onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</button>


{
    isLoading ? (
        <div>Loading.....</div>
    ) : (
        <ul>
                {data.hits.map(item => (
                    <li key={item.ObjectID}>
                        <a href={item.url}> {item.title}</a>
                    </li>
                )

                )}
            </ul>
    )
}
           

        </Fragment>

    )
}

export default Main
