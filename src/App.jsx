import React from 'react'
import Homepage from './Homepage'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const App = () => {
  return (
   <>
    <div  className='overflow-hidden '>
      <Homepage />
      <Skills />
      <Projects />
      <Contact  />
    </div>
   </>
  )
}

export default App

