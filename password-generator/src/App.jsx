import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'


function App(){
  const [value, setValue] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
       setValue((value)=>(
        value+1
       ))
    },100)

  },[])
  return(
    <>
    <ProgressBar value={value}/>
    
    </>
  )
}

export default App
