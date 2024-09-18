import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import './App.css'
import Add from "./pages/Add"
import Edit from "./pages/Edit"

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/edit/:id" element={<Edit/>}/>

    </Routes>
    </>
  )
}

export default App