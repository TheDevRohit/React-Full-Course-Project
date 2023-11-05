import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Wow from './components/wow'

function App() {
  
  const style={
    color:"red",
  }

  return (
         <>
           <h1 style={style}>hii</h1>
           <Wow></Wow> 
         </>
      
    )
}

export default App
