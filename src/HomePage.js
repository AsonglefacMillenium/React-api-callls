import React, { useEffect, useState } from 'react';


const HomePage = () => {

   const [advice,  setAdvice] = useState("");
   const [id, setId] = useState("");

useEffect(() => {
const url = "https://api.adviceslip.com/advice"

const fetchData = async() => {
    try{
        const response = await fetch(url);
        const json = await response.json();
        setId(json.slip.id);
        setAdvice(json.slip.advice);
    } 
      catch (error){
        console.log("error", error);
      }
};

fetchData();
    
        
    
}, []);

    return (
        <div className="homepage">
        
            <p>{id}</p>
            <p>{advice}</p>
        </div>
    )
}

export default HomePage
