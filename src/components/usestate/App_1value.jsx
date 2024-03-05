import React from "react";
import { useState } from "react";

const App_1value=()=>{
    const [value, setValue] = useState("");// useState saves value here
    console.log("レンダリング");

    const changeValue =(e) =>{
        setValue(e.target.value);
    }

    return(
        <>
        <div><h1>1.</h1></div>
        <input 
        type="text"
        onChange={changeValue}
         />
         = {value}

        </>
    )
}

export default App_1value