import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'
import LikeButton from './components/LikeButton'


function App(){
  // const [value, setValue] = useState(0);

  // useEffect(()=>{
  //   setInterval(()=>{
  //      setValue((value)=>(
  //       value+1
  //      ))
  //   },100)

  // },[])
  return(
    <>
    <LikeButton/>
    {/* <ProgressBar value={value}/> */}
    
    </>
  )
}

export default App
