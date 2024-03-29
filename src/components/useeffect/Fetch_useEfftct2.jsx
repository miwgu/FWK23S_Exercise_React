import React, {useState, useEffect } from 'react'


const Fetch_useEfftct2 = () => {

 const [data, setData ]= useState(null);
 const [loading, setLoading]= useState(true);
 const [error, setError] = useState(null);

 useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
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
    setData(actualData);
    setError(null);
})
.catch((err)=>{
    setError(err.message);
    setData(null);
})
.finally(()=>{
    setLoading(false);
});
 

}, []);

  return (
    <div >
      <h1>API Posts2</h1>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, title }) => (
            <li key={id}>
              <p>{id}{': '}{title}</p>
            </li>
          ))}
      </ul>

      <h1>test...</h1>
    </div>
  );
}

export default Fetch_useEfftct2