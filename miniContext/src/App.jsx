import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/userContextProvider"

function App() {

   return(
       <UserContextProvider>
          <Login></Login>
          <Profile></Profile>
       </UserContextProvider>
    )
}

export default App
