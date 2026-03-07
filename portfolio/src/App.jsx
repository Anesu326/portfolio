import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import AnimatedBackground from './components/AnimatedBackground'
import ParticleBackground from './components/ParticleBackground'  



function App() {
  return (
    // <div className='text-white text-4xl'>Portfolio App</div>
    <div className='bg-neutral-950 text-white overflow-x-hidden'>
      <ParticleBackground />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
