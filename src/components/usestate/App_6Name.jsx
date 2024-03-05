import React, { useState } from 'react'

const App_6Name = () => {
    const [name, setName] = useState('Yumi');
    const [arr, setArr] = useState(['1','2','3']);

    const singleClick =() =>{
        setName('Mitsu')
    }

    const dubbleClick =() =>{
        
        /* setArr([...arr, arr, '4']); "1","2","3",["1","2","3"],"4"*/
       setArr([...arr, arr]) 
       setArr([...arr, '4']);/*123444444 the second setArr overwrites the changes made by the first one because they are both updating*/
        console.log(arr) 
    }



  return (
    <>
    <h1>6.</h1>
    <div>{name}</div>
    <div>{JSON.stringify(arr)}</div>

    <button onClick={singleClick} onDoubleClick={dubbleClick}> Click here!</button>
    </>
  )
}

export default App_6Name