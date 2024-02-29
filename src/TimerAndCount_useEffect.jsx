import React, { useState, useEffect, useRef } from 'react'

const TimerAndCount_useEffect = () => {
    const [count, setCount]= useState(0);
    const [message, setMessage] =useState("Read a timer")

    const firstTimeRender = useRef(true);

    useEffect(() => {
        console.log("useEffect!");
        startTimer();
    });
 
    const startTimer=() =>{
        return new Promise((resolve)=> {
            setTimeout (() =>{
                setMessage("Timer loaded ");
            },5000)
        })
    }


  return (
    <>
    <div>TimerAndCount_useEffect</div>
    <div>
        <h2> Timer</h2>
        <div>{message}</div>
    </div>

    <div>
       <h2>Count</h2>
       <div>{count}</div>
       <button onClick={()=> setCount(count+1)}>Plus</button>
    </div>
    </>
  )
}

export default TimerAndCount_useEffect