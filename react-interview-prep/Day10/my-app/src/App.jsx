
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx'
import Home from './Pages/Home.jsx'
import Navbar from "./Components/Navbar.jsx"

function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App


