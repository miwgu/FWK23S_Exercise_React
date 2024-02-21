import React from "react";
import { useState } from "react";

const App_3obj=()=>{

    const obj ={name :"hana", age: "10"};
    const [newObj, setNewObj]= useState(obj);

    const changeName =(e)=>{
        setNewObj({name: e.target.value, age: newObj.age})
    }
    
    const changeAge =(e)=>{
        setNewObj({name:newObj.name, age: e.target.value})
    }

    return(
        <>

         <div><h1>3.</h1></div>
         <input type="text" value={newObj.name} onChange={changeName} />
         <input type="number" value={newObj.age} onChange={changeAge}/>
          <div>
          <p>Name: {newObj.name}</p>
          <p>Age: {newObj.age}</p>
          </div>
        </>
    )
}

export default App_3obj