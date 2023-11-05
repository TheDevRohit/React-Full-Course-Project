import React,{useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
     
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>    
  
    return (
    <div>
            <h2>Welcome {user.userName}</h2>
            <h2>Password {user.Password}</h2>
    </div>
  )
}

export default Profile
