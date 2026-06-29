
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx'
import Courses from './Pages/Courses.jsx'
import Java from './Pages/Java.jsx'
import Python from './Pages/Python.jsx'
import Navbar from "./Components/Navbar.jsx"
import Navbar2 from "./Components/Navbar2.jsx"
import DynamicRouting from "./Pages/DynamicRouting.jsx"
import NotFound from "./Pages/NotFound.jsx"

function App() {
  return(
    <>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/courses" element={<Courses/>}>
          <Route path="java" element={<Java/>}/>
          <Route path="python" element={<Python/>}/>
        </Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/contact/:id" element={<DynamicRouting/>}/>
        <Route path="*" element={<NotFound/>}/>

      </Routes>
    </>
  )
}

export default App


