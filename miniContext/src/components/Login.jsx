import React , {useState , useContext} from "react"
import UserContext from "../context/UserContext"

function Login(){
    const [userName , setuserName] = useState('');
    const [Password , setPassword] = useState('');

    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser( {userName , Password} )
    } 
   return(
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="username"
        value={userName}
        onChange={(e)=>setuserName(e.target.value)}
      /> {"   "}
      <input type="text" placeholder="password"
        value={Password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
   )
}

export default Login