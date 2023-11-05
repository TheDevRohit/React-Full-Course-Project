import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [color , setColor] = useState("pink")
  
  return (
    <div className="main"
    style={{
      height: "100vh",
      width: "100%",
      backgroundColor: color,
      }}
    >

    <div className="btn-box" style={{backgroundColor:"white"}}>
      <button onClick={()=>setColor("red")} style={{backgroundColor:"red" , color:"white"}}>red</button>
      <button onClick={()=>setColor("blue")} style={{backgroundColor:"blue" , color:"white"}}>blue</button>
      <button onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow" , color:"white"}}>yellow</button>
      <button onClick={()=>setColor("green")} style={{backgroundColor:"green" , color:"white"}}>green</button>
      <button onClick={()=>setColor("olive")} style={{backgroundColor:"olive" , color:"white"}}>olive</button>
    
    </div>

    </div>
  )
}

export default App
