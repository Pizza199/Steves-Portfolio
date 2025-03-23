import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Header/>
    <main className="main-content">
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />



      </Routes>
    </main>

    <Footer/> 
    

    </>
  )
}

export default App
