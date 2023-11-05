import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './compnents/Home/Home.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import About from './compnents/About/About.jsx'
import Contact from './compnents/Contact/Contact.jsx'
import Github, { githubInfoLoader } from './compnents/Github/Github.jsx'
import User from './compnents/User/User.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Root/>}>
     <Route path='' element={ <Home/>} />
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='github' loader={githubInfoLoader} element={<Github/>}/>
     <Route path='user/:userid' element={<User/>}/>
  
   </Route>
  )
)






// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Root/>,
//     children:[
//       {
//          path:"",
//          element: <Home/> 
//       },
//       {
//         path:"About",
//         element:<About/>
//       },
//       {
//          path:"contact",
//          element:<Contact/>
//       },
//       {
//         path :"github",
//         element:<Github/>
//       }
   
//     ]
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

   <RouterProvider router={router} />

  </React.StrictMode>,
)
