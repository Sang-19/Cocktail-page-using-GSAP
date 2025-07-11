import React from 'react'
import { navLinks } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Navbar = () => {
  useGSAP(()=>{
    const navTween = gsap.timeline({
      scrollTrigger:{
        trigger: 'nav',
        start: 'bottom top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        toggleActions: 'play none none reverse'
      }
    });
    navTween.fromTo('nav', {backgroundColor: 'transparent'},{ 
      backgroundColor: 'black', 
      backgroundFilter: 'blur(10px)',
      duration: 1,
      ease: 'power1.inout'
    });
  })
  return (
    <nav>
      <div>
        <a href="#home" className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="" />
          <p>Devil Pour</p>
        </a>
        <ul>
          {
           navLinks.map((link) => (
            <li key={link.id}>
              <a href={'#${link.id}'}>{link.title}</a>
            </li>
           ))
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar