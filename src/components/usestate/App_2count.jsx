import React from "react";
import { useState, useRef, useEffect } from "react";

const App_2count=()=>{

    const [value, setValue] = useState(0);
    const countRef = useRef(0);

    const handleStateClick =() => setValue(value +1);
    const handleRefClick=() => countRef.current++;

 /*    const changeValue =() =>{
        setValue(value+1);
        setValue(value+1);
        //setValue(prev=> prev+1);
        console.log(value)

    } */

    useEffect(() =>{
        console.log("Component mounted");
    },[countRef.current])
    console.log("レンダリング");


    
    return(
        <>

    <div>
         <div><h1>2.</h1></div>
         <div><p>state +1</p></div>
         <button onClick={handleStateClick}>{value}</button>
         <br />
         <div><p>ref +1</p></div>
         <button onClick={handleRefClick}>{countRef.current}</button> 
    </div>
    
        </>
    )
}

export default App_2count