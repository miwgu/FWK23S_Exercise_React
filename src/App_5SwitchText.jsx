import React, { useState } from 'react'
import './App_5SwitchText.css'


function App_5SwitchText() {
    const [text, setText] = useState(false);// default false
    console.log(!text);// true
    const showText = () => setText(!text);
    const buttonText =text ? "show" : "hide";

  
    return (
      <>
        <div><h1>5.</h1></div>
        <button onClick={showText} id="changeBtn">
          {buttonText}
        </button>
        <h2 className={text ? "no-active" : "active"}>
          Start editing to see some magic happen!
        </h2>
      </>
    );
  }
export default App_5SwitchText