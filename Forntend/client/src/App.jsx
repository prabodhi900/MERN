import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Profile from './Pages/Profile'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      
    </Routes>
    </BrowserRouter>
  )
}

  
  
