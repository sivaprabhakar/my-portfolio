import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { Routes,Route } from 'react-router-dom'

function AppRoutes() {
  return ( 
  <>
  
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact" element={<Contact />} />

  </Routes>
  
  </>
   
  )
}

export default AppRoutes