import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Certificate from "./components/certificate"

function App() {
  return (
   <>
      <Navbar />
      <Hero />
      <Skills />
      <Portfolio />
      <Experience />
      <Certificate />
      <Contact />
      <Footer />
   </>
  )
}

export default App
