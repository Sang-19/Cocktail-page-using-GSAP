import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap';
const Hero = () => { 
  useGSAP(() => {
    const heroSplit = new SplitText('.title',{type: 'chars,words'});
    const paragraphSplit = new SplitText('.subtitle',{type: 'lines'});
    heroSplit.chars.forEach((chaR) => chaR.classList.add('text-gradient'));
    gsap.from(heroSplit.chars,{
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
    });
    gsap.from(paragraphSplit.lines,{
      yPercent: 100,
      opacity: 0,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    });
    gsap.timeline({
      scrollTrigger:{
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        pinSpacing: false,
        toggleActions: 'play none none reverse'
      }
    })
    .to('right-leaf',{y:200}, 0)
    .to('left-leaf',{y:-200}, 0)
   },[]);
  
  return (
    <>
        <section id='hero' className='noisy'>
          <h1 className='title'>MOJITO</h1>
          <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
          <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
          <div className='body'>
            <div className='content'>
              <div className='space-y-5 hidden md:block'>
                <p>Cool.Crisp.Classic</p>
                <p className='subtitle text-left'>Drink with the<br/> devil in summer</p>
              </div>
                <div className='view-cocktails'>
                  <p className='subtitle'>
                    Every cocktail on our menu is blend of premium ingredients, creatiev flair, and timeless recipes - deisgned to deligh your senses.
                  </p>
                  <a href="cocktails">View Cocktails</a>
                </div>
              </div>
            </div>
        </section>
    
    </>
    
  )
}

export default Hero 