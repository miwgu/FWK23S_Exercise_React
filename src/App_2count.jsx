import React from "react";
import { useState } from "react";

const App_2count=()=>{

    const [value, setValue] = useState(0);


    const changeValue =() =>{
        setValue(value+1);
        setValue(value+1);
        //setValue(prev=> prev+1);
        console.log(value)

    }

    return(
        <>

         <div><h1>2.</h1></div>
         <button onClick={changeValue}>{value}</button>

        
        </>
    )
}

export default App_2count