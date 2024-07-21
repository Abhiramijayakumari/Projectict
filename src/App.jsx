import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import User from './components/User'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <Routes>
      
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </>
  )
}

export default App
