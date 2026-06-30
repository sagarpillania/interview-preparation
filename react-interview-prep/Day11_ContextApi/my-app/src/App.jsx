
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar.jsx"
import Navbar2 from "./Components/Navbar2.jsx"


function App() {
  const [theme,setTheme]=useState("light");

  return(
    <>
      <Navbar/>
      <Navbar2 theme={theme} setTheme={setTheme}/>
    </>
  )
}

export default App


