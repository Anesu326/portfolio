import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'



function App() {
  return (
    <div className='bg-neutral-950 text-white overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
