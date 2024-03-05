import React, { useState } from 'react'

const App_8AddName = () => {
    const [name, setName] = useState([]);

    
    const addToNameArr =(e)=>{
      const input = e.target.previousElementSibling.value.trim();
      if(input===""){
        alert("You should input a name.")
      }else if (!name.includes(input)){ 
      setName([...name, input])
      alert("Your name "+input+ ", is inputed!")
      }else{
        alert("There is already the name "+input+". You should input other name.")
      }
   }

    const checkDupplicate = (inputName)=>{

    }
  
  return (
    <>
    <h1>8.</h1>  
    <input type="text" />
    <button onClick={addToNameArr}>Submit</button>
    <div>{name.map((n)=>(
      <p>
      {n}{','}

      </p>
    )
    )}</div>

    </>
  )
}

export default App_8AddName