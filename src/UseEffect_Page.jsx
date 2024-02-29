import React from 'react'
import Fetch_useEfftct from './Fetch_useEfftct'
import Fetch_useEfftct2 from './Fetch_useEfftct2'
import TimerAndCount_useEffect from './TimerAndCount_useEffect'
import Fetch_useEfftct3 from './Fetch_useEfftct3'

const UseEffect_Page = ({searchTerm}) => {
  return (
    <>
    <div>UseEffect_Page</div>
    <TimerAndCount_useEffect/>
    <Fetch_useEfftct searchTerm= {searchTerm}/>
    {/* <Fetch_useEfftct2/>
    <Fetch_useEfftct3 /> */}
    
    </>
  )
}

export default UseEffect_Page