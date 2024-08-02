import {createBrowserRouter,RouterProvider, Link} from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/Parent/Parent'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Services from './components/Contact/Contact'
import Notfound from './components/Notfound/Notfound'
import Footer from './components/Footer/Footer'
import Layout from './components/Layout/Layout'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import { faFortAwesome } from '@fortawesome/free-brands-svg-icons/faFortAwesome'




function App() {
   let router= createBrowserRouter([
    {path:'',element:<Layout/>,children:[ 
      {index:true,element:<About/>},
      {path:'about',element:<About/>},
      { path:'contact',element:<Contact/>},
      { path:'portfolio',element:<Portfolio/>},
      { path:'*',element:<Notfound/>}]}
     


      
    ])
  return<>
   
<RouterProvider router={router}></RouterProvider>

    </>

}

export default App
