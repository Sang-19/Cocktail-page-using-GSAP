import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/hero'; // Changed 'herow' to 'Hero'
gsap.registerPlugin(ScrollTrigger, SplitText);   //to register then only they work
const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-dvh bg-black'/>
    </main>
  )
}

export default App