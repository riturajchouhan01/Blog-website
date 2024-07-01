import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import '../App.css'
import '../src/App.css'
import {Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Blog from './Components/Blog'
import Home from './Components/Home'
import Contact from './Components/Contact'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Blog' element={<Blog/>} />
      <Route path='/Contact' element={<Contact/>}/>
    </Routes>
  
    </>
  )
}

export default App

