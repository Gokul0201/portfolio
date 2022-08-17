import React from 'react'
import './App.css'
import Home from './Components/home/Home'
import Contact from './Components/contact/Contact'
import About from './Components/About/About'
import Navbar from './Components/navbar/Navbar'
import Projects from './Components/projects/Projects'
import Skills from './Components/skills/Skills'
import Footer from './Components/footer/Footer'


const App = () => {
  return (
    <>
  
  <Home/>
  <Navbar/>
  <About/>
  <Skills/>
  <Projects/>
  <Contact/>
  <Footer/>
  
  </>
  )   
  
}

export default App