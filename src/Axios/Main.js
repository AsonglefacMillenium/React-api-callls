import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Main = () => {

const [data, setdata] = useState({hits: []});

useEffect(() => {
    const fetchData = async () =>{
        const result = await axios(
            'https://hn.algolia.com/api/v1/search?query=redux'
    
        );
    
        setdata(result.data);
        
    }
    fetchData();
   
   
}, [])


    return (
        <div className="main">
          <ul>
              {data.hits.map(item => (
                  <li key={item.ObjectID}>
                      <a href={item.url}> {item.title}</a>
                  </li>
              )

              )}
          </ul>
        </div>
    )
}

export default Main
 