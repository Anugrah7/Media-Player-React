import { useState } from 'react'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
  
      {/* Path for landing (baseUrl:http://localhost:5173/),home (http://localhost:5173/home),history (http://localhost:5173/history) */}
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/history' element={<History/>} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
