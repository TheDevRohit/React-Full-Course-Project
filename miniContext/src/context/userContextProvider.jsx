import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
   
    const [user ,setUser] = React.useState(null);

    return(
         // aise sare de sakte hai {user,setUser},..... ==============|
         <UserContext.Provider value={{user , setUser}}>  
           {children}
         </UserContext.Provider>
    )
}

export default UserContextProvider