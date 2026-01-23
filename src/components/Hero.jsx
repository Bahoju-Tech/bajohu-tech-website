import React from 'react'
import Header from './Header'
import bgImage from '../assets/hero-bg.png'

function Hero() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
        <Header />

        <div className='mt-36 max-w-4xl mx-auto flex flex-col items-center justify-center px-4'>
            <h1 className='lato-bold text-[60px] text-center text-white'>One Platform</h1>
            <h1 className='lato-regular text-[60px] text-white text-center'>Multiple African Tech Solutions</h1>
            <p className='lato-regular text-[20px] text-center text-white mt-2'>From enterprise software and cloud infrastructure to safe mobility, ecommerce systems, and tech education. Bahoju builds products that move Africa forward.</p>
        </div>
    </div>
  )
}

export default Hero