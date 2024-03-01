import React, { useState, useEffect } from 'react'
import Image from 'react-bootstrap/Image';

const Meal = ({searchTerm}) => {

    const [data, setData ]= useState(null);
    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(null);
   
    useEffect(()=>{
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
            .then((res) => {
                if(!res.ok){
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                        );
                }
                console.log(res)
                return res.json()
                
                })
            .then((actualData)=>{
                setData(actualData.meals);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
                setData(null);
            })
            .finally(()=>{
                setLoading(false);
            });
                
            
            }, [searchTerm]);
   
   
/*    const filteredData = data 
    ?  data.filter ((item)=>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
   )
   : []; */
   
     return (
       <div >
         <h1>Meals</h1>
         {loading && <div>A moment please...</div>}
         {error && (
           <div>{`There is a problem fetching the post data - ${error}`}</div>
         )}
         <ul>
           {data &&
             data.map(({ idMeal, strMeal, strMealThumb}) => (
              <li key={idMeal}>
                <h3>{strMeal}</h3>
                <Image src={strMealThumb} rounded />
              </li>

             ))}
         </ul>

       </div>
     );
   }

export default Meal